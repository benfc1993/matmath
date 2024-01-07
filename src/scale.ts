import { Matrix, matrix } from './matrix'

export function scale(mat: Matrix, scalar: number): Matrix {
    return matrix(mat.data.map((row) => row.map((item) => item * scalar)))
}
