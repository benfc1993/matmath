import { MatMathError } from './MatMathError'
import { Matrix, matrix } from './matrix'

export function multiply(matA: Matrix, matB: Matrix): Matrix {
    if (
        matA.dimentions[1] !== matB.dimentions[0] &&
        matA.dimentions[0] !== matB.dimentions[1]
    )
        throw new MatMathError('matA must have columns matching matB rows')

    const matBT = matB.transpose()
    const product = Array.from(Array(matA.dimentions[0]), () =>
        new Array(matB.dimentions[1]).fill(0)
    )
    for (let colIndex = 0; colIndex < matBT.dimentions[0]; colIndex++)
        for (let row = 0; row < matA.dimentions[0]; row++) {
            let sum = 0
            for (let col = 0; col < matA.dimentions[1]; col++) {
                sum += matA.data[row][col] * matBT.data[colIndex][col]
            }
            product[row][colIndex] = sum
        }

    return matrix(product)
}
