import { Injectable } from '@angular/core';

@Injectable()
export class LoginValidationService {

  constructor() { }

 validateEmail(email) : boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
       {
           return (true)
       }
   alert("You have entered an invalid email address!")
       return (false)
}

 validatePassword(password) : boolean{
   
   if (password == "") {
       alert("Please enter a password");
       return false;
   }
   else return true;   
}

getRegistrationEmailAddress() : string{
  var emailObj = <HTMLInputElement>document.getElementById("RgstrEmail");
  var email: string = emailObj.value;
  console.log(email);
  return email;
  
}


getRegistrationPassword() : string{
  var PwdObj = <HTMLInputElement>document.getElementById("RgstrPwd");
  var password: string = PwdObj.value;

  return password;
  
}

}
