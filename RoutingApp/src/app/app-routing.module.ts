import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {
    path: '', redirectTo: "third", pathMatch: 'full'
  },
  {
    path: 'third', component: ThirdComponent
  },
  {
    path: 'first', component: FirstComponent,
    children: [
      {
        path: 'child-a',//child route path
        component: ChildAComponent, //child route component that the router render
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
    ]
  },
  {
    path: 'second', component: SecondComponent
  },
  {
    path: '**', component: PagenotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
