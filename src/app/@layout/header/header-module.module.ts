import {NgModule} from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {CommonModule} from '@angular/common';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {HeaderComponentComponent} from './header-component/header-component.component';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzTagModule} from "ng-zorro-antd/tag";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AccountBookFill, AlertFill, AlertOutline,UserOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill,UserOutline ];


@NgModule({
  declarations: [
    HeaderComponentComponent
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzAvatarModule,
    NzTagModule,
    NzDropDownModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    HeaderComponentComponent
  ]
})
export class HeaderModule {
}
