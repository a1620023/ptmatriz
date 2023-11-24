
import { Schema, Types, model, Model } from "mongoose";
import { SquereMatrixI } from "./matrix.interface"

const MatrixSchema = new Schema<SquereMatrixI>(
    {
        mlenght: {
            type: String
        },
        value: {
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const MatrixModel = model("token", MatrixSchema)

export { MatrixModel}