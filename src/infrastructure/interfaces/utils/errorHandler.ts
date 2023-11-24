import { Response } from "express"

const ErrorHandlerHTTP = (res: Response, error: string) => {
    res.status(500)
    res.send({ error})
}

export { ErrorHandlerHTTP }