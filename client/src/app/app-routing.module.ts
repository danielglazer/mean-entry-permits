import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./login/login.module').then((m) => m.LoginModule),
	},
	// {
	// 	path: 'dashboard/guest',
	// 	loadChildren: () =>
	// 		import('./guest/guest.module').then((m) => m.GuestModule),
	// },
	// {
	// 	path: 'dashboard/guard',
	// 	loadChildren: () =>
	// 		import('./guard/guard.module').then((m) => m.GuardModule),
	// },
	// {
	// 	path: 'dashboard/branch',
	// 	loadChildren: () =>
	// 		import('./branch/branch.module').then((m) => m.BranchModule),
	// },
	// {
	// 	path: 'dashboard/compound',
	// 	loadChildren: () =>
	// 		import('./compound/compound.module').then((m) => m.CompoundModule),
	// },
	// {
	// 	path: 'dashboard/admin',
	// 	loadChildren: () =>
	// 		import('./admin/admin.module').then((m) => m.AdminModule),
	// },
	{
		path: 'not-found',
		component: NotFoundComponent,
	},
	{ path: '**', redirectTo: 'not-found' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
