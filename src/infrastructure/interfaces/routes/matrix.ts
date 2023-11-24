import {Request, Response, Router } from "express";
import { InsertTokenItem, GetTokenItems, postToken, updateToken } from "../controllers/matrix.controller";

const router = Router()


router.get("/", GetTokenItems)


router.get("/:id", GetTokenItems)


router.post("/", InsertTokenItem)


router.put("/:id", updateToken)


router.delete("/:id", (req:Request, res:Response) => {
    res.send({
        data: "modelos"
    })
})


export {router}