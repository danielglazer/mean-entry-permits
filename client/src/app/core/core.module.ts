import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 * This abstract class used for module building by extending this class
 * prevents importing the module into somewhere else than root App Module.
 */
export abstract class EnsureImportedOnceModule {
	protected constructor(targetModule: any) {
		if (targetModule) {
			throw new Error(
				`${targetModule.constructor.name} has already been loaded.`
			);
		}
	}
}

@NgModule({
	declarations: [NotFoundComponent],
	imports: [CommonModule],
	exports: [NotFoundComponent]
})
export class CoreModule extends EnsureImportedOnceModule {
	public constructor(@SkipSelf() @Optional() parent: CoreModule) {
		super(parent);
	}
}
