import express from "express";
import cors from "cors";

import apexRouter from "./routes/apex.js";


const app = express();


app.use(
  cors()
);


app.use(
  express.json()
);



app.use(
  "/apex",
  apexRouter
);



app.get(
  "/",
  (req, res)=>{

    res.json({
      status:"APEX API ONLINE"
    });

  }
);



app.listen(
  3333,
  ()=>{

    console.log(
      "Apex API running on port 3333"
    );

  }
);