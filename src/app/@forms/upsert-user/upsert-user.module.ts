import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpseertUserComponentComponent } from './upseert-user-component/upseert-user-component.component';



@NgModule({
  declarations: [
    UpseertUserComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[UpseertUserComponentComponent]
})
export class UpsertUserModule { }
