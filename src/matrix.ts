import { cross } from './cross'
import { dot } from './dot'
import { scale } from './scale'
import { transposeMat } from './transpose'

export interface Matrix {
    transpose(): Matrix
    data: number[][]
    dimentions: [number, number]
    scale: (scalar: number) => Matrix
    dot: (otherMatrix: Matrix) => Matrix
    cross: (otherMatrix: Matrix) => Matrix
    toString: () => number[][]
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
