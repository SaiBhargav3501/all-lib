import { NgModule } from '@angular/core';
import { InputLibComponent } from './input-lib.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    InputLibComponent,
    LoginComponent,
    FormsComponent,
    HomeComponent
  ],
  imports: [
  ],
  exports: [
    InputLibComponent,
    LoginComponent,
    FormsComponent,
    HomeComponent
  ]
})
export class InputLibModule { }
