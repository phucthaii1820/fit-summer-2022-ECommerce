import express from "express";
import cors from "cors";
import { mongoose } from "mongoose";

import activate_route_middleware from "./middlewares/routes.mdw.js";

const app = express();
const PORT = 3000;

const MONGO_URI =
  "mongodb+srv://phucthaii1820:qAferAwC2cYidQiC@cluster0.lzf0r.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connect Success!!!");
  })

  .catch((err) => {
    console.log(err);
  });

activate_route_middleware(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
