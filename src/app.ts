import "dotenv/config"
import express from "express";
import cors from "cors"

import {router} from "./infrastructure/interfaces/routes"
import { PostgresDB } from "./infrastructure/data/postgresql"
import {dbConnect} from "./infrastructure/data/mongo"
import { GetTokens } from "./application/useCases/getTokenUseCase";

const PORT = process.env.PORT || 3001



const app = express()
app.use(cors({
    origin: ['http://localhost:4200']
}))
app.use(router)
app.use(express.json())
PostgresDB.connect()
dbConnect().then(() => {
    console.log("Conectando a mongodb .....")
})
GetTokens()
app.listen(PORT, ()=>console.log(`Desplegando por el puerto ${PORT}`))