import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { authDB } from "../private/db.secrets";
import { UsersRoutes } from "./users/routes";

class App {
  public app: express.Application;
  public mongoUrl: string = `mongodb://${authDB.username}:${authDB.password}@localhost:27017/EntryPermitsDB`;

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
    //config globalmiddleweres
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
