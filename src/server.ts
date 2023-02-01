import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
/* console.log(process.env.JWT_KEY); */

const app = express();
const port = process.env.PORT || 3000;
class app {
    constructor() {
        
    }
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
