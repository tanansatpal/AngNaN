import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './components/slides/slides.component';
import { HomeComponent } from './home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule
  ],
  declarations: [SlidesComponent, HomeComponent]
})
export class HomeModule {
}
