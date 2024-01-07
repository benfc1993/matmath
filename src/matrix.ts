export interface Matrix {
    transpose(): Matrix
    data: number[][]
    dimentions: [number, number]
    scale: (scalar: number) => Matrix
    dot: (otherMatrix: Matrix) => Matrix
    cross: (otherMatrix: Matrix) => Matrix
    toString: () => number[][]
}
