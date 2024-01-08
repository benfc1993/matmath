import { multiply } from './multiply'
import { dot } from './dot'
import { scale } from './scale'
import { transposeMat } from './transpose'
import { MatMathError } from './MatMathError'

export interface Matrix {
    transpose(): Matrix
    data: number[][]
    dimentions: [number, number]
    identity: number[][]
    scale: (scalar: number) => Matrix
    dot: (otherMatrix: Matrix) => Matrix
    mult: (otherMatrix: Matrix) => Matrix
    toString: () => string
    valueOf: () => string
}

export function matrix(data: number[][]): Matrix {
    if (data.length === 0)
        throw new MatMathError('matrix must have size greater than 0')
    const dim1 = data[0].length
    for (const row of data) {
        if (row.length !== dim1)
            throw new MatMathError('All rows must be the same size')
    }
    return {
        data,
        get dimentions() {
            const dims: [number, number] = [data.length, data[0].length]
            return dims
        },
        get identity() {
            return Array.from(Array(this.dimentions[0]), () =>
                new Array(this.dimentions[1]).fill(0)
            ).map((row: number[], i) => row.map((_, j) => (i === j ? 1 : 0)))
        },
        scale(scalar: number) {
            return scale(this, scalar)
        },
        dot(otherMatrix: Matrix) {
            return dot(this, otherMatrix)
        },
        mult(otherMatrix: Matrix) {
            return multiply(this, otherMatrix)
        },
        transpose() {
            return transposeMat(this)
        },
        toString() {
            return JSON.stringify(data)
        },
        valueOf() {
            return JSON.stringify(data)
        }
    }
}
