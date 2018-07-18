import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Validators, AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.html'
})

export class RegisterPage {
    public commonUrl = 'http://localhost:3000/'

    public states: any[];
    public districts: any[];
    public towns: any[];

    public selectedDistricts: any[];
    public selectedTowns: any[];

    public sState: any;
    public sDistrict: any;
    public sTown: any;


    name: AbstractControl;
    surname: AbstractControl;
    gotram: AbstractControl;
    occupation: AbstractControl;
    mobile_number: AbstractControl;
    password: AbstractControl;
    state_id: AbstractControl;
    dist_id: AbstractControl;
    town_id: AbstractControl;
    refName: AbstractControl;

    formValidate: any;
    registerForm: FormGroup;

    public regModel: any = {};

    constructor(
        public _appService: AppService,
        public formBuilder: FormBuilder,
    ) {
        this.formValidate = false;

        this.registerForm = formBuilder.group({
            NAME: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z, " "]+')])],
            SURNAME: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z, " "]+')])],
            GOTRAM: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z, " "]+')])],
            OCCUPATION: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z, " "]+')])],
            PASSWORD: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
            MOBILENUMBER: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')])],
            STATE: ['', Validators.compose([Validators.required])],
            DIST: ['', Validators.compose([Validators.required])],
            TOWN: ['', Validators.compose([Validators.required])],
            REFNAME: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z, " "]+')])]
        });

        this.name = this.registerForm.controls['NAME'];
        this.surname = this.registerForm.controls['SURNAME'];
        this.gotram = this.registerForm.controls['GOTRAM'];
        this.occupation = this.registerForm.controls['OCCUPATION'];
        this.password = this.registerForm.controls['PASSWORD'];
        this.mobile_number = this.registerForm.controls['MOBILENUMBER'];
        this.state_id = this.registerForm.controls['STATE'];
        this.dist_id = this.registerForm.controls['DIST'];
        this.town_id = this.registerForm.controls['TOWN'];
        this.refName = this.registerForm.controls['REFNAME'];
        this.getStatesInfo();
        this.regModel = {
            name: 'ramu',
            surname: 'vishwanatham',
            mobile_number: 8096018362,
            password: '54697409',
            gotram: 'chandhakula',
            occupation: 'Employee'
        }
    }

    ngOnInit() {
        this.getDistrictsInfo();
        this.getTownsInfo();
    }

    getStatesInfo() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllStates').subscribe(data => {
            this.states = data;
        })
    }

    getDistrictsInfo() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllDists').subscribe(data => {
            this.districts = data;
        })
    }

    getTownsInfo() {
        this._appService.genericGetMethod(this.commonUrl + 'getAllTowns').subscribe(data => {
            this.towns = data;
        })
    }


    setDistrictValues(sState) {
        this.selectedDistricts = [];
        this.selectedDistricts = this.districts.filter(district => district.state_id == sState._id)
    }

    setCityValues(sDistrict) {
        this.selectedTowns = [];
        this.selectedTowns = this.towns.filter(town => (town.district_id == sDistrict.district_id && town.state_id == sDistrict.state_id));
    }

    doRegister(value: any): void {

        if (this.regModel.refName == 'father') {
            this.regModel.husband_name = '';
        } else {
            this.regModel.father_name = '';
        }

        if (this.registerForm.valid) {
            this.regModel.sRef == 'father' ? this.regModel.father_name = this.regModel.refName : this.regModel.husband_name = this.regModel.refName;
            this.regModel.state_id = this.sState._id;
            this.regModel.dist_id = this.sState._id;
            this.regModel.town_id = this.sState._id;
            this.regModel.device_key = localStorage.getItem('DEVICE_KEY')
            console.log(JSON.stringify(this.regModel));
            this._appService.genericPostMethod(this.commonUrl + 'user-registration', this.regModel).subscribe(data => {
                console.log(data);
            })
        } else {
            this.formValidate = true;
        }
    }

    diabledMethod() {
        if (this.regModel.sRef != 'father' && this.regModel.sRef != 'husband') {
            alert('please select ref radio box')
        }

    }
}
