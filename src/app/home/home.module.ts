import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './components/slides/slides.component';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [SlidesComponent, HomeComponent]
})
export class HomeModule {
}
