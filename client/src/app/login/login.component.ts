import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginPageType, LoginPage } from './login-page.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	type: LoginPage;

	signinForm = new FormGroup({
		id: new FormControl(''),
		password: new FormControl(''),
	});
	signupForm = new FormGroup({
		id: new FormControl(''),
		password: new FormControl(''),
		name: new FormControl(''),
	});

	constructor(activatedRoute: ActivatedRoute) {
		this.type = new LoginPage(
			activatedRoute.snapshot.url.toString() as LoginPageType
		);
	}

	ngOnInit() {}
}
