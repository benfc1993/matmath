import { matrix } from './matrix'

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
