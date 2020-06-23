// /lib/routes/crmRoutes.ts
import express from 'express';

import { UserController } from './controller';

export class UsersRoutes {

	public static userController = new UserController();

	public static routes(app: express.Application): void {
		// Create a new contact
		app.route('/').post(this.userController.addNewUser);
		// Get all contacts
		app.route('/users').get(this.userController.getUsers);
		// get,update, delete specific user
		app.route('/user/:userId')
			.get(this.userController.getUserWithID)
			.put(this.userController.updateUser)
			.delete(this.userController.deleteUser);
	}
}
