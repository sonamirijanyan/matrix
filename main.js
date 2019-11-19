const utils = require('./utils');
const matrix = require('./matrix');

let mat = [['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I']];


let mat1 = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

let mat2 = [[7, 6, 3],
    [8, 5, 2],
    [9, 4, 1]];

console.log(utils.multiplyMatrices(mat1, mat2));
console.log(matrix.print(mat));