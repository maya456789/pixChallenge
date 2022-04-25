import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ThanxFormComponent } from './thanx-form/thanx-form.component';


const routes: Routes = [

  { path:'login', component:LoginComponent},
  
  { path:'verify',component:ReactiveFormComponent},


  { path:'thanxuser',component:ThanxFormComponent},

  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }

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
