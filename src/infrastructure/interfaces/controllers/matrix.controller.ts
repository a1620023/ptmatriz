import { Request, Response } from "express";
import { CreateMatrix } from "../../../application/usecase/matrix.usecase";
import { InsertToken, GetTokens } from "../../../application/useCases/getTokenUseCase";
import { ErrorHandlerHTTP } from "../utils/errorHandler";



    const InsertMatrixItem = async ({ body }:Request, res:Response) => {
        console.log("ingresamos al get del controller InsertMatrixItem ...(I1)")
        try {
            const responseMatrix:any = await CreateMatrix(body)
            console.log("in getMatrix .... ", responseMatrix)
            res.send(responseMatrix)
        } catch (error) {
            console.log("...[E]",error)
            ErrorHandlerHTTP(res, 'Internal server error - getMatrix'+error)
        }
    }

    const GetTokenItems = async (req:Request, res:Response) => {
        console.log("ingresamos al get del controller GetTokenItems ...(G1)")
        try {
            const responseMatrix = await GetTokens()
            console.log("in GetTokenItems .... ", responseToken)
            res.send(responseToken)
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - getTokens'+error)
        }
    }
    
    const updateToken = async (req:Request, res:Response) => {
        console.log("ingresamos al update del controller ...(c1)")
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - updateToken'+error)
        }
    }
    
    const postToken = async (req:Request, res:Response) => {
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - postToken'+error)
        }
    }

    
    const deleteToken = async (req:Request, res:Response) => {
        try {
        } catch (error) {
            ErrorHandlerHTTP(res, 'Internal server error - deleteTokens'+error)
        }
    }
// }

// export { TokenController }
export { InsertMatrixItem, GetTokenItems, updateToken, postToken, deleteToken}