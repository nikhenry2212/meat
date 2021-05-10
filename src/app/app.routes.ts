import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  //coloquei uma rota e sinalize que irá receber um argumento
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      //navegação filhas para dois components menu e avaliações
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },

  { path: 'order', component: OrderComponent },//rota nova para o component Order
  { path: 'order-summary', component: OrderSummaryComponent },//rota nova para o component Order-summary
  { path: 'about', loadChildren: './about/about.module#AboutModule'}// rota para compatilhar modulo
  // add rota para component
]
