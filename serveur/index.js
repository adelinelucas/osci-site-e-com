import express from "express";
import dotenv from 'dotenv';
import { connectBD } from "./config/connectDB.js";
import cors from 'cors';

// import des routers
import productPanierRouter from './routes/product_panier.js'
import productsCatalogueRouter from './routes/product_catalogue.js'


// ==========
// App initialization
// ==========
dotenv.config({path:'./config/.env'})
const {MONGO_URI, APP_PORT_FRONT, APP_LOCALHOST, APP_PORT_BACK,ORIGIN } = process.env;
// 
// const APP_PORT_BACK = process.env.APP_PORT_BACK

// ==========
// Démarrage de express
// ==========
const app = express();
app.use(express.json());
// pour pouvoir récupérer les éléments du body non en json
app.use(express.urlencoded());

// ==========
// Cors
// ==========
app.use(cors({
    origin:ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH","HEAD","DELETE","OPTIONS" ]//"GET,HEAD,PUT,PATCH,POST,DELETE",
}))

// ==========
// Routes
// ==========
    // ==========
    // Routes Riad
    // ==========
      app.use('/panier',productPanierRouter )

    // ==========
    // Routes Alexandre
    // ==========

/// écrire les routes de Alexandre ici

    // ==========
    // Routes Adeline
    // ==========
      app.use('/catalogue', productsCatalogueRouter)

// ==========
// Start app
// ==========

const start = async() => {
    try{
        await connectBD(MONGO_URI);
        app.listen(APP_PORT_BACK, ()=>{
            console.log(`App listen at http://${APP_LOCALHOST}:${APP_PORT_BACK}`)
        })

    }catch(err){
        console.log(err)
    }
}

start(); 