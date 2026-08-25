 import express from "express";
import router from "./routes/route";
import "dotenv/config";
import cors from"cors"


const app = express();
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json());

app.use("/students", router);



const PORT = process.env.PORT || 3000;app.listen(PORT,()=>{
    console.log(`${PORT} is listing`)
}) 