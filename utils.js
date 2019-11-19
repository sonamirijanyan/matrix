function multiplyMatrices(matrix1, matrix2){
    let arr1 = matrix1[0];
    let arr2 = [];
    for (let i = 0; i < matrix2.length; i++){
        arr2.push(matrix2[i][0]);
    }
    if(arr1.length === arr2.length){
        let res = new Array(matrix1.length);
        for (let k = 0; k < matrix1.length; k++) {
            res[k] = new Array(matrix2[0].length); // initialize the current row
            for (let c = 0; c < matrix2[0].length; c++) {
                res[k][c] = 0;             // initialize the current cell
                for (let i = 0; i < matrix1[0].length; i++) {
                    res[k][c] += matrix1[k][i] * matrix2[i][c];
                }
            }
        }
        let result = "";

        for(let i = 0; i < res.length; i++) {
            for(let j = 0; j < res.length; j++) {
                result += res[i][j] + '\t';
            }
            result += "\n";
        }
        return result;
    }else{
        return 'Numbers doesnot much';
    }
}

module.exports = {
    multiplyMatrices
};