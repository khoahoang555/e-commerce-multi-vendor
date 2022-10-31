import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuHeaderDesktopComponent } from './menu-header/menu-header-desktop/menu-header-desktop.component';
import { MenuHeaderMobileComponent } from './menu-header/menu-header-mobile/menu-header-mobile.component';
import { MenuIndexPageComponent } from './menu-index-page/menu-index-page.component';
import { MenuBannerComponent } from './menu-index-page/menu-banner/menu-banner.component';
import { MenuIconComponent } from './menu-index-page/menu-icon/menu-icon.component';
import { MenuFlashSaleComponent } from './menu-index-page/menu-flash-sale/menu-flash-sale.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FormsModule } from '@angular/forms';
import { MenuEventsComponent } from './menu-index-page/menu-events/menu-events.component';
import { EventHeaderComponent } from './menu-index-page/menu-events/event-header/event-header.component';
import { EventDirectionComponent } from './menu-index-page/menu-events/event-direction/event-direction.component';
import { EventBodyComponent } from './menu-index-page/menu-events/event-body/event-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    MenuHeaderDesktopComponent,
    MenuHeaderMobileComponent,
    MenuIndexPageComponent,
    MenuBannerComponent,
    MenuIconComponent,
    MenuFlashSaleComponent,
    CardItemComponent,
    MenuEventsComponent,
    EventHeaderComponent,
    EventDirectionComponent,
    EventBodyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
