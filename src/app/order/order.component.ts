import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

import {Router} from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',

})
export class OrderComponent implements OnInit {

    orderForm: FormGroup;
    //referencia de FormGroup

    delivery: number = 8;
    //Valor fixo do frete

  paymentOptions: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Débito", value: "DEB"},
    {label: "Cartão Refeição", value: "REF"}
  ]

  constructor (
              private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address:this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control(''),
    })
  }
itemsValue(): number{
  return this.orderService.itemsValue();
}

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }
  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }
  remove(item: CartItem){
    this.orderService.remove(item);
  }
  checkOrder(order: Order){
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe(( orderId: string) => {
      this.router.navigate(['/order-summary'])// criei uma rota usando Router e usando metodo navigate passando a rota
      this.orderService.clear()
    })
    console.log(order);
  }

}
