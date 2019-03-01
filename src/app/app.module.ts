import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { HomeModule } from '@app/home';
import { LayoutModule } from '@app/layout';
import { PrebootModule } from 'preboot';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './app.reducer';

import { fakeBackendProvider } from '@shared/interceptors/fake-backend.interceptor';
import { responseProvider } from '@shared/interceptors/response.interceptor';
import { tokenProvider } from '@shared/interceptors/token.interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ang-nan' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    HomeModule,
    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [tokenProvider, responseProvider, ...fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
