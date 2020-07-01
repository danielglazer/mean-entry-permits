export type LoginPageType = 'signin' | 'signup';

export class LoginPage {
	public pageName: string;

	constructor(public proute: string) {
		this.pageName = proute === 'signin' ? 'Sign in' : 'Sign up';
		console.log(this.pageName);
	}
}
