import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import uma lib de rotas do angular

import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
//import de modelo de restaurants

import { RestaurantsService} from '../restaurants/restaurants.service'
//import dos metodos de rotas ,prara detalhes dos restaurants

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',

})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
