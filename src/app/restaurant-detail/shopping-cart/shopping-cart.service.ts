import {Injectable} from '@angular/core';
import { NotificationService } from 'app/shared/messages/notification.service';

import { MenuItem } from "../menu-item/menu-item-model"
import { CartItem } from "./cart-item.model"

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = []
 // Serviço de mensagens quando add um item no carrinho
  constructor(private notificationService: NotificationService) {}

  //limpar carrinho
  clear() {
    this.items = []
  }

  //metodo de add item no carrinho

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if(foundItem){
      this.increaseQty(foundItem)
      console.log(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
    //Mensagem de item add no carrinho
    this.notificationService.notify(`Você adicionou o item ${item.name}`)
  }


  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1
    if (item.quantity === 0){
      this.removeItem(item)
    }
  }
//remover item
  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)

  }
  //somar items adicionados no carrinho
  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }
}
