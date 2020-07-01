import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
	],
})
export class SharedModule {}
