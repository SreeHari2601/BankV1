import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login form 

   loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern("[0-9]*")]],
    pswd:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
   }) 

constructor(private fb:FormBuilder,private api:ApiService) { }

ngOnInit(): void {
 }
login() {
  
  if(this.loginForm.valid){

  let acno =this.loginForm.value.acno
  let pswd = this.loginForm.value.pswd
  this.api.login(acno,pswd).subscribe((result)=>{
    console.log(result);
    
  })
  alert("logged in")
} else {
  alert("invalid")
}

}

}
