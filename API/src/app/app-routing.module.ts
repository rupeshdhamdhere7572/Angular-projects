import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { SearchListComponent } from './search-list/search-list.component';

const routes: Routes = [
  {path :'',redirectTo:'app', pathMatch:'full'},
  { path: "plist", component: PolicyListComponent },
  { path: "slist/:id", component: SearchListComponent },
 {path:"add", component:AddPolicyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
