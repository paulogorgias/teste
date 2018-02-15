import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form.component';
import { SignInFormRoutingModule } from './sign-in-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
  CommonModule,
  SignInFormRoutingModule,
  FormsModule,
  ReactiveFormsModule
  ],
  declarations: [SignInFormComponent]
})
export class SignInFormModule { }
