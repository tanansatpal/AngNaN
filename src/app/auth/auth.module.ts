import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from '../auth/reducers/auth.reducer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('auth', AuthReducer),
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, SignUpComponent],
})
export class AuthModule {
}
