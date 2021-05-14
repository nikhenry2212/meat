
import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import { Restaurant } from "./restaurant/restaurant.model";

import 'rxjs/add/operator/map';
// import pra usar modelo de tipagem da classe restaurant
import 'rxjs/add/operator/catch';
//import de tratamento de erro

import {MEAT_API} from './../app.api';
import { ErrorHandler} from '../app.error-handler'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item-model';
//import do modelo menu-item
//import da class q o erro foi tratado

@Injectable()
export class RestaurantsService {


  constructor(private http: HttpClient){}
  //passando um params de pesquisa ñ obrigatorio?
  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;
    if(search){
      params = new HttpParams().append('q', search)

    }
    // return this.http.get(`${MEAT_API}/restaurants1`) teste de erro
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})// alocando um segundo params e ""q": significa q pode ser qualquer coisa que ele está ouvindo

  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)

  }

  // Nova rota para avaliações
  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }
  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)

    // criando nova rota de menu do restaurants items a serem consumidos
  }
}
