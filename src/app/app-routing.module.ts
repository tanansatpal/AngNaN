import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'user',
    loadChildren: './user/index#UserModule',
  },
  {
    path: 'cart',
    loadChildren: './cart/index#CartModule',
  },
  {
    path: 'product',
    loadChildren: './product/index#ProductModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
