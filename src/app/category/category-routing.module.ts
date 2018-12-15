import { CategoryComponent } from './category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CategoryRoutes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: ':alias', component: CategoryComponent},
  {path: 'all', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(CategoryRoutes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule {
}
