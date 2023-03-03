import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ShowComponent } from './show/show.component';



@NgModule({
  declarations: [
    RegisterComponent,
    ShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent,
    ShowComponent
  ]
})
export class AdminModule { }
