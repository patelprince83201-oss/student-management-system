 import express from "express";
import routes from "./routes/routes.js";
import "dotenv/config";
import cors from"cors"


const app = express();
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json());

app.use("/students", routes);



const PORT = process.env.PORT || 3000;app.listen(PORT,()=>{
    console.log(`${PORT} is listing`)
}) 