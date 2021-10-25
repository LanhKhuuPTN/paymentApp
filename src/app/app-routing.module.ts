import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PaymentDetailsEditComponent } from './payment-details/payment-details-edit/payment-details-edit.component';
import {PaymentDetailsComponent} from './payment-details/payment-details.component';
import { RegisterComponent } from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomePageComponent } from './home-page/home-page.component';
import {PlayerComponent} from './player/player.component';
import { ImageCropperComponent } from 'ngx-image-cropper';

const routes: Routes = [
  // {
  //   path: "",
  //   component: PaymentDetailsComponent, canActivate: [AuthGuardService]
  // },
  {
    path: "edit/:id",
    component: PaymentDetailsEditComponent, canActivate: [AuthGuardService]
  },
  { 
    path: "login",
    component: LoginComponent, 
  },
  { 
    path : "login/register",
    component: RegisterComponent, 
  },
  { 
    path : "confirmemail",
    component: ConfirmComponent, 
  },
  { 
    path : "confirmpassword",
    component: ForgotPasswordComponent,
  },
  { 
    path: "login/forgot",
    component: ResetpasswordComponent, 
  },
  {path:'forgotpassword',
   component: ForgotPasswordComponent
  },
  {
    path : "",
    component: PlayerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
