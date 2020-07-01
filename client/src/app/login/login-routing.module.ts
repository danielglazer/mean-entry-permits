import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: 'signin',
		component: LoginComponent,
	},
	{
		path: 'signup',
		component: LoginComponent,
	},
	{ path: '', redirectTo: 'signin' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginRoutingModule {}
