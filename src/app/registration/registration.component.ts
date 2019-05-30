import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {i18nlib} from '../i18n-lib';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

    loading = false;

    submitted = false;

    returnUrl: string;

    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password1: ['', Validators.required],
            password2: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.error = i18nlib.REGISTER.SUCCESS;
        this.authenticationService.register( this.f.username.value, this.f.email.value, this.f.password1.value, this.f.password2.value)
        // .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    // todo catch error properly
                    this.error = i18nlib.REGISTER.ERROR;
                    this.loading = false;
                });
    }

}
