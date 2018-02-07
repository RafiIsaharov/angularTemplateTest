import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginValidationService } from '../services/login-validation.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    fullname : string;

    constructor(public router: Router , private loginValidationService: LoginValidationService) {}

    ngOnInit() {}

    onLoggedin() {
        var validEmail : boolean;                
        //var emailObj = <HTMLInputElement>document.getElementById("RgstrEmail");
        //var email: string = emailObj.value;

        var validPassword : boolean;


        console.log("this is the email: " + this.loginValidationService.getRegistrationEmailAddress());

        var email = this.loginValidationService.getRegistrationEmailAddress();
        validEmail = this.loginValidationService.validateEmail(email);
    
        //validEmail = validateEmail(email);
        validPassword = this.loginValidationService.validatePassword (this.loginValidationService.getRegistrationPassword());

        if (validEmail && validPassword) {
            localStorage.setItem('isLoggedin', 'true');
        }
        
       

    }
}
