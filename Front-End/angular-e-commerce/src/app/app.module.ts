import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuHeaderDesktopComponent } from './menu-header/menu-header-desktop/menu-header-desktop.component';
import { MenuHeaderMobileComponent } from './menu-header/menu-header-mobile/menu-header-mobile.component';
import { MenuIndexPageComponent } from './menu-index-page/menu-index-page.component';
import { MenuBannerComponent } from './menu-index-page/menu-banner/menu-banner.component';
import { MenuIconComponent } from './menu-index-page/menu-icon/menu-icon.component';
import { CardItemComponent } from './common/components/card-item/card-item.component';
import { FormsModule } from '@angular/forms';
import { MenuEventsComponent } from './menu-index-page/menu-events/menu-events.component';
import { EventHeaderComponent } from './menu-index-page/menu-events/event-header/event-header.component';
import { EventDirectionComponent } from './menu-index-page/menu-events/event-direction/event-direction.component';
import { EventBodyComponent } from './menu-index-page/menu-events/event-body/event-body.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { MenuFooterHeaderComponent } from './menu-footer/menu-footer-header/menu-footer-header.component';
import { MenuFooterBodyComponent } from './menu-footer/menu-footer-body/menu-footer-body.component';
import { PopupNotificationComponent } from './menu-header/menu-header-desktop/popup-notification/popup-notification.component';
import { SearchItemComponent } from './menu-header/menu-header-desktop/search-item/search-item.component';
import { PopupAccountComponent } from './menu-header/menu-header-desktop/popup-account/popup-account.component';
import { PopupChooseLanguageComponent } from './menu-header/menu-header-desktop/popup-choose-language/popup-choose-language.component';
import { PopupCategoryComponent } from './menu-header/menu-header-desktop/popup-category/popup-category.component';
import { PopupCategoryMobileComponent } from './menu-header/menu-header-mobile/popup-category-mobile/popup-category-mobile.component';
import { MenuAsideBarComponent } from './menu-aside-bar/menu-aside-bar.component';
import { LoadMoreButtonComponent } from './common/components/load-more/load-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    MenuHeaderDesktopComponent,
    MenuHeaderMobileComponent,
    MenuIndexPageComponent,
    MenuBannerComponent,
    MenuIconComponent,
    CardItemComponent,
    MenuEventsComponent,
    EventHeaderComponent,
    EventDirectionComponent,
    EventBodyComponent,
    MenuFooterComponent,
    MenuFooterHeaderComponent,
    MenuFooterBodyComponent,
    PopupNotificationComponent,
    SearchItemComponent,
    PopupAccountComponent,
    PopupChooseLanguageComponent,
    PopupCategoryComponent,
    PopupCategoryMobileComponent,
    MenuAsideBarComponent,
    LoadMoreButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
