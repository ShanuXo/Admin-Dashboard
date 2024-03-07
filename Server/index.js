import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from "./Routes/Client.js"
import generalRoutes from "./Routes/General.js"
import managementRoutes from "./Routes/Management.js"
import salesRoutes from "./Routes/Sales.js"


/* Data import (data into database) */

import User from "./Models/User.js";
import { dataUser } from "./Data/index.js";


/*   CONFIGURATION   */

dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet()); // Security first
app.use(helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors())


/* ROUTES */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


/* MOONGOSE SETUO  */

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    /* ONLY ADD DATA  ONE TIME*/
    // User.insertMany(dataUser);
}).catch((error)=> console.log(`${error} did not connect`)); 