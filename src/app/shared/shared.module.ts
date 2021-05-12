// Modulo compartilhado, Input Radio Raiting,
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'; // card de notificação

import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { NotificationService } from './messages/notification.service'; // mensagem de notificão

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SnackbarComponent // foi criado dentro de um modulo compartilhado
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
     return{
       ngModule: SharedModule,
       providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService],
     }
    }
}
