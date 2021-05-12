import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { MenuItem } from './menu-item-model';

import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared',[
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),//aniamção para desce o menu de cima para baixo
        animate('600ms 0s ease-in')
      ])
    ])
  ]

})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'

@Input() menuItem: MenuItem;
@Output() add = new EventEmitter();
// Criando um evento

  constructor() { }

  ngOnInit() {
  }
emitAddEvent(){
  this.add.emit(this.menuItem)
  //criando um evento
}
}
