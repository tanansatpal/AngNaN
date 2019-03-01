import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/index';
import { NguCarouselModule } from '@ngu/carousel';
import { SlidesComponent } from './components/slides/slides.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrandsComponent } from './components/brands/brands.component';
import { SiteService } from '@shared/services/site.service';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import 'hammerjs';

@NgModule({
  imports: [CommonModule, NguCarouselModule, HomeRoutingModule, SharedModule],
  declarations: [SlidesComponent, HomeComponent, BrandsComponent, BannerComponent, CategoriesComponent],
  providers: [SiteService]
})
export class HomeModule {}
