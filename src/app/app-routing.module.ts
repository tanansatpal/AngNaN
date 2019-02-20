import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { UserGuard } from '@app/user/guards/user.guard';
import { Observable, of } from 'rxjs';

export class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    data: { preload: true }
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'user',
    canLoad: [UserGuard],
    loadChildren: './user/index#UserModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/index#CartModule'
  },
  {
    path: 'product',
    loadChildren: './product/index#ProductModule'
  },
  {
    path: 'category',
    loadChildren: './category/index#CategoryModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadSelectedModulesList })],
  providers: [PreloadSelectedModulesList],
  exports: [RouterModule]
})
export class AppRoutingModule {}
