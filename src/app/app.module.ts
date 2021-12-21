import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, } from '@angular/core'; //LOCALE_ID provide para mudar a moeda
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//uma forma mais nova de fazer forms
import { ROUTES } from './app.routes';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail//menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importei o modulo pq estava dando erro no providers

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';///modulo compartilhado (input,radio,raiting)

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';


//importei o modulo

//import do component Restaurant


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,

    OrderSummaryComponent,

    NotFoundComponent,

    LoginComponent,

   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Modulo de serviços
    SharedModule.forRoot(),//declaração
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })// modulo about foi compartilhado
    // preloading carrega o modulo de rotas uma vez só
  ],//LOCALE_ID provide para mudar o valor da moeda
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt-BR' }],//coloquei modulo de erro aqui
  // Todo Service tem que colocar em providers
  //chamei o service  no providers
  bootstrap: [AppComponent]
})
export class AppModule { }
