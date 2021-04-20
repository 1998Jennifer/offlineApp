import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component'
import { ProductsService } from './products.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
