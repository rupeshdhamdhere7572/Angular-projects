import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyaddComponent } from './policyadd/policyadd.component';
import { PolicydetailsComponent } from './policydetails/policydetails.component';
import { PolicylistComponent } from './policylist/policylist.component';

const routes: Routes = [
  {
    path:"",redirectTo:'/plist',pathMatch:'full'

  },
  {path:'plist',component:PolicylistComponent},

  {
    path: 'add', component: PolicyaddComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
