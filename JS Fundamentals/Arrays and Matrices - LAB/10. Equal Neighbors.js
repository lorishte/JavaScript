
function equalNeighbours(matrix) {

    let count = 0;

    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                count++
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] == matrix[row][col + 1]) {
                count++
            }
        }
    }

    console.log(count);
}

equalNeighbours
    ([['2', '3', '4', '7', '0'],
      ['4', '0', '5', '3', '4'],
      ['2', '3', '5', '4', '2'],
      ['9', '8', '7', '5', '4']]);

equalNeighbours([['test', 'yes', 'yo', 'ho'],
    ['done', 'done', 'yo', 'yo'],
    ['not', 'done', 'yet', '5']]
);