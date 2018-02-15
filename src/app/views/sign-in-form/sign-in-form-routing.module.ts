import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 


import {SignInFormComponent}  from './sign-in-form.component';

const routes: Routes = [

{
path: 'login',
component: SignInFormComponent,
data: {
title: 'Login page'
}
}
];


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SignInFormRoutingModule{}

