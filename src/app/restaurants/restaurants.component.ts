import { Component, OnInit } from '@angular/core';
// import do modelo que o restaurant vai seguir =  criando uma tipagem
import {Restaurant} from './restaurant/restaurant.model';

import {trigger, state, style, transition, animate} from '@angular/animations';



import { RestaurantsService } from './restaurants.service';
// tirei o modelo de tipagem de classe de Restaurant e coloquei para o modelo de service

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden',style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible',style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"

      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]


})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';

   restaurants: Restaurant[]
  //[

  // //simulando dados do back-end
  //     {
  //       id: "bread-bakery",
  //       name: "Bread & Bakery",
  //       category: "Bakery",
  //       deliveryEstimate: "25m",
  //       rating: 4.9,
  //       imagePath: "assets/img/restaurants/breadbakery.png",

  //     },
  //     {
  //       id: "burger-house",
  //       name: "Burger House",
  //       category: "Hamburgers",
  //       deliveryEstimate: "100m",
  //       rating: 3.5,
  //       imagePath: "assets/img/restaurants/burgerhouse.png",

  //     }
  // ]

  constructor(private restaurantService: RestaurantsService) { }
  // chamei ele dentro do constructor como propriedade

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }
  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
