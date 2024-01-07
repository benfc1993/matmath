import { Matrix, matrix } from './matrix'
import { transpose } from './transpose'

export function dot(matA: Matrix, matB: Matrix): Matrix {
    let dataA = matA.dimentions[0] >= matB.dimentions[1] ? matA.data : matB.data
    let dataB = matA.dimentions[0] >= matB.dimentions[1] ? matB.data : matA.data

    const matARows = dataA.length
    const matACols = dataA[0].length

    const matBRows = dataB.length
    const matBCols = dataB[0].length

    const areSameOrientation = matARows === matBRows && matACols === matBCols
    const areTranspositions = matARows === matBCols && matACols === matBRows
    const isValidSizes = areSameOrientation || areTranspositions

    if (!isValidSizes) {
        throw Error('matrices must be same size')
    }

    if (areTranspositions) {
        dataB = transpose(dataB)
    }

    let product: number[][] = Array.from(Array(dataA.length), () =>
        new Array(dataB.length).fill(0)
    )

    function innerDot(matA: number[], matB: number[]) {
        let sum = 0
        for (let i = 0; i < matA.length; i++) {
            sum += matA[i] * matB[i]
        }
        return sum
    }

    for (let row = 0; row < dataA.length; row++) {
        for (let col = 0; col < dataB.length; col++) {
            product[row][col] = innerDot(dataA[row], dataB[col])
        }
    }

    return matrix(product)
}
