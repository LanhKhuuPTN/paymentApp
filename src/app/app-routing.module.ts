import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PaymentDetailsEditComponent } from './payment-details/payment-details-edit/payment-details-edit.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerComponent } from './player/player.component';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { ShowTeamComponent } from './teamManage/show-team/show-team.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    component: PaymentDetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'edit/:id',
    component: PaymentDetailsEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/register',
    component: RegisterComponent,
  },
  {
    path: 'confirmemail',
    component: ConfirmComponent,
  },
  {
    path: 'confirmpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'login/forgot',
    component: ResetpasswordComponent,
  },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  {
    path: 'registerTeam',
=======
  {
    path: "",
    component: PaymentDetailsComponent, canActivate: [AuthGuardService]
  },
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
  // {
  //   path: '',
  //   component: PlayerComponent,
  // },
  {
    path: 'register', canActivate: [AuthGuardService],
>>>>>>> a2fe3689ffed20605428e1bc9a8063e55d2e2f69
    component: RegisterTeamComponent,
  },
  {
    path: 'teamManagement',
    component: ShowTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
