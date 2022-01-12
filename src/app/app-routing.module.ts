import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ThanxFormComponent } from './thanx-form/thanx-form.component';


const routes: Routes = [
  { path:'verify',component:ReactiveFormComponent},


  { path:'thanxuser',component:ThanxFormComponent}

 ];
/*
 {path:'login',component:LoginComponent,canActivateChild:[CguardGuard],canActivate:[AguardGuard],
   children:[
   // {path:'',redirectTo:'login',pathMatch:'full'},
     {path:'info',component:InfoComponent,pathMatch:'full'}
   ]},

*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
