import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '@shared/components';
import { SlidesComponent } from './components/slides/slides.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrandsComponent } from './components/brands/brands.component';
import { SiteService } from '@shared/services/site.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentModule
  ],
  declarations: [SlidesComponent, HomeComponent, BrandsComponent],
  providers: [SiteService]
})
export class HomeModule {
}
