import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [LoginComponent],
	imports: [LoginRoutingModule, SharedModule, MatButtonModule],
})
export class LoginModule {}
