import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from '@app/user/guards/user.guard';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule',
  },
  {
    path: 'user',
    canLoad: [UserGuard],
    loadChildren: './user/index#UserModule',
  },
  {
    path: 'cart',
    loadChildren: './cart/index#CartModule',
  },
  {
    path: 'product',
    loadChildren: './product/index#ProductModule',
  },
  {
    path: 'category',
    loadChildren: './category/index#CategoryModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
