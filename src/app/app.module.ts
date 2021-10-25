import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaymentDetailsEditComponent } from './payment-details/payment-details-edit/payment-details-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { LoginComponent } from './login/login.component'
import {TokenInterceptorService} from './shared/token-interceptor.service';

import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerComponent } from './player/player.component';
import { ShowPlayerComponent } from './player/show-player/show-player.component';
import { EditPlayerComponent } from './player/edit-player/edit-player.component';
import { ImageCropperComponent } from './player/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'

export function tokenGetter(){
  return localStorage.getItem('jwt');
}


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    PaymentDetailsEditComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent,
    HomePageComponent,
    PlayerComponent,
    ShowPlayerComponent,
    EditPlayerComponent,
    ImageCropperComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    NgxPaginationModule,
    ImageCropperModule,
    NgbModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    NgSelectModule,
    DropDownListModule,

    
    JwtModule.forRoot({
      config:{
       tokenGetter: tokenGetter,
       allowedDomains: ["localhost:5001"],
       disallowedRoutes: []
      }
    }),
  
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, 
    multi: true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
