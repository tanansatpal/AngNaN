import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsComponent } from './icons/icons.component';

import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, IconsComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule {
}
