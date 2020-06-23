import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { UsersRoutes } from './users/routes';

class App {
	public app: express.Application;
	public mongoUrl: string = 'mongodb://localhost/EntryPermitsDB';

	constructor() {
		this.app = express();
		this.config();
		this.registerRoutes();
		this.mongoSetup();
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	}

	private config(): void {
		//config global middleweres
		this.app.use(cors()); // todo: remove when cors is not needed anymore
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}

	private registerRoutes(): void {
		// register the desireable routes
		UsersRoutes.routes(this.app);
	}
}

export default new App().app;
