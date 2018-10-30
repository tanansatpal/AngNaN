import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserModule } from '@app/user/user.module';
import { ProductModule } from '@app/product';
import { CartModule } from '@app/cart';
import { AuthModule } from '@app/auth';
import { HomeModule } from '@app/home';
import { LayoutModule } from '@app/layout';

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
    AppRoutingModule,
    UserModule,
    ProductModule,
    CartModule,
    AuthModule,
    HomeModule,
    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
