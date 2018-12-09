import { CategoryComponent } from './components/category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CategoryRoutes: Routes = [
  {
    path: ':alias', component: CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(CategoryRoutes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule {
}
