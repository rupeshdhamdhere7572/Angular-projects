import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipecomponentComponent } from './pipecomponent/pipecomponent.component';
import { PowerPipe } from './power.pipe';
import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipecomponentComponent,
    PowerPipe,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
