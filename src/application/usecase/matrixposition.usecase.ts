
import { SquereMatrixI } from "../../domain/matrix.interface";
import { CreateMatrix } from "./matrix.usecase";

function ChangeMatrixPosition(matriz: SquereMatrixI): SquereMatrixI {
        const { mlenght, value } = matriz;
        let newMatrix: SquereMatrixI = CreateMatrix(mlenght);
    
        for (let i = 0; i < mlenght; i++) {
            for (let j = 0; j < mlenght; j++) {
                newMatrix.value[i][j] = matriz.value[j][mlenght - i - 1];
            }
        }
    
        return newMatrix;
    }

export { ChangeMatrixPosition}