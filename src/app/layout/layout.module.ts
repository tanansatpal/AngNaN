import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, IconsComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule {
}
