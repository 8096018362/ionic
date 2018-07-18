import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MenuController } from 'ionic-angular/index';
// import { LoginService } from './services/login-service';
// import { ToastController } from 'ionic-angular';

import { AppService } from '../../services/app.service';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    public commonUrl = 'http://localhost:3000/'
    formValidate: any;
    public userModel: any;
    loginForm: FormGroup;

    constructor(
        private platform: Platform,
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        public _appService: AppService,
        // public menu: MenuController,
        // public loginService: LoginService,
        // public toastCtrl: ToastController
    ) {
        this.formValidate = false;
        this.loginForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
        });
    }

    serviceResponce: any;
    doLogin(value: any): void {
        if (this.loginForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            const userObj = {
                mobile_number: value.username,
                password: value.password
            }
            this._appService.genericPostMethod(this.commonUrl + 'user-login', userObj).subscribe(data => {
                this.serviceResponce = data;
                console.log(JSON.stringify(this.serviceResponce))
                // if (this.serviceResponce.status == 200) {
                //     console.log(data);
                //     this.navCtrl.setRoot('HomePage');
                // } else {
                //     alert('please enter valid credentials');
                // }

            })
        } else {
            this.formValidate = true;
        }
    }

    newUser() {
        this.navCtrl.setRoot(RegisterPage)
    }


}
