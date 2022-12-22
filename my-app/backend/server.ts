<<<<<<< HEAD
import express, {Response, Request, application} from 'express';
const mongoose = require("mongoose");
const passport = require('passport');
const connectDB = require('./config/database')
const mainRoutes = require("./routes/main")
const profileRoutes = require("./routes/profile")
const dealsRoutes = require("./routes/deals")
const leadsRoutes = require("./routes/leads")
const contactsRoutes = require("./routes/contacts")
//const tokenRoutes = require("./routes/token")
//const subscribeRoutes = require("./routes/subscribe")
//const unsubscribeRoutes = require("./routes/unsubscribe")
=======
import express, {Response, Request} from 'express';
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
import {} from 'dotenv/config'

import contactRoutes from './routes/Contact.js' 
import dealRoutes from './routes/Deal.js'
import leadRoutes from './routes/Lead.js'
import authRoutes from './routes/Auth.js'

dotenv.config()
>>>>>>> c83c4a9c3d9811444859989cf016f53441cb4688
const app = express();
let PORT = 3000;

mongoose.connect(`${process.env.DATABASE_URL}`)
// const db = mongoose.connection;
    .then(() => {
        console.log('connected to database')
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).send("OK!");
})

<<<<<<< HEAD
//use .env file in config folder
require("dotenv").config({path:'./config/.env'})
//passport config
require('./config/passport')(passport)
//connect to databse
connectDB()
//body parsing? not sure if we need it
app.use(express.urlencoded({extended: true}))
app.use(express.json());
//passport middleware
app.use(passport.initialize());

//setup routes for which the server is listening
app.use("/main", mainRoutes)// route for landing page, login/out, signup
//app.use("/profile", profileRoutes)//profile page
//app.use("/deals", dealsRoutes)//deals
//app.use("/leads", leadsRoutes)//leads
//app.use("/contacts", contactsRoutes)//contacts
//app.use("/token", tokenRoutes)//token 
//app.use("/subscribe", subscribeRoutes)//subscribe to newsletter
//app.use("/unsubscribe", unsubscribeRoutes)//unsubscribe from newsletter
=======
app.use("/auth", authRoutes); //routes
app.use("/leads", leadRoutes);
app.use("/deals", dealRoutes);
app.use("/contacts", contactRoutes);
>>>>>>> c83c4a9c3d9811444859989cf016f53441cb4688

try {
    app.listen(PORT, () => {
        console.log("Server listening on Port", PORT);
    })
} catch(e: any) {
    console.log("There was an error: ", e.message);
}