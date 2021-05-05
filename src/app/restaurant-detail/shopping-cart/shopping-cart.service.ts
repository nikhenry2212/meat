import { MenuItem } from "../menu-item/menu-item-model"
import { CartItem } from "./cart-item.model"

export class ShoppingCartService {
  items: CartItem[] = []
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
    // this.notificationService.notify(`Você adicionou o item ${item.name}`)
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
  }
  //somar items adicionados no carrinho
  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }
}
