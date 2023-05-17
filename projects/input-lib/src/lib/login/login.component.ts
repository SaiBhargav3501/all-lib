import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  a: string="sai";
  @Input() label: string="";
  @Input() value="saiBhargav";
  @Output() valueChange = new EventEmitter<string>();

  onChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(newValue);
    console.log(this.value)
    
  }
  

  
  
}
