import { Matrix, matrix } from './matrix'

export function transpose(mat: number[][]): number[][] {
    const transposedData: number[][] = Array.from(Array(mat[0].length), () =>
        new Array(mat.length).fill(0)
    )

    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (row === 0) {
                transposedData[col] = []
            }
            transposedData[col][row] = mat[row][col]
        }
    }
    return transposedData
}

export function transposeMat(mat: Matrix): Matrix {
    return matrix(transpose(mat.data))
}
