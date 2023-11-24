
import { SquereMatrixI } from "../../domain/matrix.interface";


function CreateMatrix(mlen: number): SquereMatrixI {

  let sqrMatrix: SquereMatrixI = {
    mlenght: mlen,
    value: new Array(mlen)
  }

  for (let i = 0; i < mlen; i++) {
    sqrMatrix.value[i] = new Array(mlen).fill(0); // Inicializa la matriz con ceros
  }

  return sqrMatrix
}


function ShowMatriz(matriz: SquereMatrixI): void {
  for (let i = 0; i < matriz.mlenght; i++) {
      console.log(matriz.value[i].join("\t"));
  }
}


// Ejemplo de uso
const tamañoMatriz: number = 4; // Cambia aquí el tamaño de la matriz cuadrada
let miMatriz: SquereMatrixI = CreateMatrix(tamañoMatriz);
console.log("Matriz creada:");
ShowMatriz(miMatriz);


const GetMatrix =async () => {
  const responseGet = await SquereMatrix.find({})
  console.log("GetTokens: ver en responseGet...", responseGet)
  return responseGet
}


export { CreateMatrix, ShowMatriz }