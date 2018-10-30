import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AuthRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
