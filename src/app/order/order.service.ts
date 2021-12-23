import { Injectable } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { Order, OrderItem } from './order.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MEAT_API } from './../app.api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'app/security/login/login.service';


@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }
  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }
  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }
  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    let headers = new HttpHeaders();
    if(this.loginService.isLoggedIn()){
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.acessToken}`)
      console.log(headers);
      
    }
    return this.http.post<Order>(`${MEAT_API}/orders`,order, {headers: headers})
      .map(order => order.id)// Conversão para string
  }
}
