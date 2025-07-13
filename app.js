import express from "express";
import { router } from "./routs/questions.js";
const app = express();
const port = 3000;
app.use(express.json())
app.use(router)
app.listen(port,()=>{
    console.log(`serer running at http://${port}`);
})