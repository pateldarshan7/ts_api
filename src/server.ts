import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { init } from "./connection/db";

/* console.log(process.env.JWT_KEY); */
const port = process.env.PORT || 3000;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.mongoDBConnect();
    this.listen();
  }
  private async mongoDBConnect() {
    await init();
  }
  public async listen() {
    this.app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
}

export default new App();
