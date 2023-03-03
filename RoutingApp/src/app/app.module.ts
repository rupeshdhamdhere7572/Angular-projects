import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent,
    PagenotfoundComponent,
    ChildAComponent,
    ChildBComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
