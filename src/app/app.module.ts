import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


import { ApiService } from './api.service';
import { HttpClientModule} from '@angular/common/http';
import { ThanxFormComponent } from './thanx-form/thanx-form.component';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ThanxFormComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [ApiService,
  {
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:false,
      providers:[
        {
          id:GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1083428248811-htiel5fstnlrlm48v8s4h07kcdofj92o.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
