import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './components/slides/slides.component';
import { HomeComponent } from './home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HomeRoutingModule } from './home-routing.module';
import { BrandsComponent } from './components/brands/brands.component';
import { SiteService } from '@shared/services/site.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule
  ],
  declarations: [SlidesComponent, HomeComponent, BrandsComponent],
  providers: [SiteService]
})
export class HomeModule {
}
