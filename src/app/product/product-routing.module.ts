import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ProductRoutes: Routes = [
  {
    path: ':id', component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProductRoutes)],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
