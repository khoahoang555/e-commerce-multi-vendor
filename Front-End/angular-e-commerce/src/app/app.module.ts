import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuHeaderDesktopComponent } from './menu-header/menu-header-desktop/menu-header-desktop.component';
import { MenuHeaderMobileComponent } from './menu-header/menu-header-mobile/menu-header-mobile.component';
import { MenuIndexPageComponent } from './menu-index-page/menu-index-page.component';
import { MenuBannerComponent } from './menu-index-page/menu-banner/menu-banner.component';
import { MenuIconComponent } from './menu-index-page/menu-icon/menu-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    MenuHeaderDesktopComponent,
    MenuHeaderMobileComponent,
    MenuIndexPageComponent,
    MenuBannerComponent,
    MenuIconComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
