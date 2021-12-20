import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemObjectComponent } from '../components/item-object/item-object.component';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { ObjectFormComponent } from '../components/object-form/object-form.component';

const routes: Routes = [
  {path: '',pathMatch: 'full' ,redirectTo: "/login"},
  {path: 'login',component:LoginComponent},
  {path: 'main',pathMatch: 'full', component: MainComponent},
  {path: 'form',component: ObjectFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
