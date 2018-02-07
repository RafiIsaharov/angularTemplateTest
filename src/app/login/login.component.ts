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
        var validPassword : boolean;        

        var email = this.loginValidationService.getRegistrationEmailAddress();
        var password = this.loginValidationService.getRegistrationPassword();
        
        validEmail = this.loginValidationService.validateEmail(email);         
        validPassword = this.loginValidationService.validatePassword (password);

        if (validEmail && validPassword) {
            localStorage.setItem('isLoggedin', 'true');
        }
        
       

    }
}
