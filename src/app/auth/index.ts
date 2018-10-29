import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutes } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    RouterModule.forChild(AuthRoutes),
  ]
})
export class AuthModule {
}
