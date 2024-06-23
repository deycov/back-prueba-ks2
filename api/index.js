import express from "express";
import database from "./database/database.js";
import "./database/users.js";

import router from "./routes/users.routes.js";

import {
  logErrors,
  errorHandler,
  boomErrorHandler
} from "./middlewares/error.handler.js"

const app = express();
app.use(express.json());
app.use(router);

app.all('*', (req, res)=>{
  return res.status(404).json("Page not found");  
})

const port = 3000;
    
app.listen(port, (req, res) => {
  console.log("Aplicacion corriendo en el puerto" , port)
});

app.use(logErrors);

app.use(errorHandler);

app.use(boomErrorHandler);