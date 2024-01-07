import { dot } from './dot'
import { Matrix } from './matrix'

function cross(matA: Matrix, matB: Matrix): Matrix {
    return matA
}

function scale(mat: Matrix, scalar: number): Matrix {
    return matrix(mat.data.map((row) => row.map((item) => item * scalar)))
}

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

function transposeMat(mat: Matrix): Matrix {
    return matrix(transpose(mat.data))
}

export function matrix(data: number[][]): Matrix {
    const dim1 = data[0].length
    for (const row of data) {
        if (row.length !== dim1)
            throw new Error('MatMath: all rows must be the same size')
    }
    return {
        data,
        get dimentions() {
            const dims: [number, number] = [data.length, data[0].length]
            return dims
        },
        scale(scalar: number) {
            return scale(this, scalar)
        },
        dot(otherMatrix: Matrix) {
            return dot(this, otherMatrix)
        },
        cross(otherMatrix: Matrix) {
            return cross(this, otherMatrix)
        },
        toString() {
            return data
        },
        transpose() {
            return transposeMat(this)
        }
    }
}

const m = matrix([
    [1, 2, 3],
    [1, 2, 3]
])
const n = matrix([
    [1, 1],
    [2, 2],
    [3, 3]
])
const mDotN = m.dot(n)
console.log(mDotN.data)

const mT = m.transpose()
console.log(mT)
