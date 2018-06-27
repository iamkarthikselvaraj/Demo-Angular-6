import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {MenuComponent} from './view/shipping/menu/menu.component';
import {AppRoutingModule} from './/app-routing.module';
import {StockComponent} from './view/stock/stock.component';
import {DashboardComponent} from './view/shipping/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './core/token.storage';
import {AuthService} from './core/auth.service';
import {Interceptor} from './core/inteceptor';
import {FormsModule} from '@angular/forms';
import {StockEntryComponent} from './view/shipping/stock-entry/stock-entry.component';
import {BreadcrumbComponent} from './layout/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    StockComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    StockEntryComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [TokenStorage, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
