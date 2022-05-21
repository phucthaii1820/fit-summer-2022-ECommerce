import express from "express";
import cors from "cors";
import { mongoose } from "mongoose";
import dotenv from "dotenv"

import activate_route_middleware from "./middlewares/routes.mdw.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connect Success!!!");
  })

  .catch((err) => {
    console.log(err);
  });

  app.use(express.json())

activate_route_middleware(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
