import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {fa_IR} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import fa from '@angular/common/locales/fa';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {SideBarModule} from "./@layout/side-bar/side-bar.module";
import {HeaderModule} from "./@layout/header/header-module.module";
import { AgGridModule } from 'ag-grid-angular';

registerLocaleData(fa);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    SideBarModule,
    HeaderModule,
    AgGridModule

  ],
  providers: [{provide: NZ_I18N, useValue: fa_IR}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
