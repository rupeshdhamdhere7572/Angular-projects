import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { PolicydetailsComponent } from './policydetails/policydetails.component';
import { PolicyaddComponent } from './policyadd/policyadd.component';
import { PolicylistComponent } from './policylist/policylist.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PolicydetailsComponent,
    PolicyaddComponent,
    PolicylistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
