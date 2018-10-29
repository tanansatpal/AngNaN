import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserModule } from '@app/user/user.module';
import { ProductModule } from '@app/product/product.module';
import { CartModule } from '@app/cart/cart.module';
import { AuthModule } from '@app/auth/auth.module';
import { HomeModule } from '@app/home/home.module';
import { LayoutModule } from '@app/layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    UserModule,
    ProductModule,
    CartModule,
    AuthModule,
    HomeModule,
    LayoutModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
