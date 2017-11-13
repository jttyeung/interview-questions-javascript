// sudoku function to check if the grid matches sudoku requirements
//1-9 unique numbers on each row and column and each section 3X3

const grid = [[".",".",".","1","4",".",".","2","."], 
 [".",".","6",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".","1",".",".",".",".",".","."], 
 [".","6","7",".",".",".",".",".","9"], 
 [".",".",".",".",".",".","8","1","."], 
 [".","3",".",".",".",".",".",".","6"], 
 [".",".",".",".",".","7",".",".","."], 
 [".",".",".","5",".",".",".","7","."]]; // should return False

const grid2 = [[".",".",".",".","2",".",".","9","."], 
 [".",".",".",".","6",".",".",".","."], 
 ["7","1",".",".","7","5",".",".","."], 
 [".","7",".",".",".",".",".",".","."], 
 [".",".",".",".","8","3",".",".","."], 
 [".",".","8",".",".","7",".","6","."], 
 [".",".",".",".",".","2",".",".","."], 
 [".","1",".","2",".",".",".",".","."], 
 [".","2",".",".","3",".",".",".","."]]; // should return False

const grid3 = [["1","2","3","4","5","6","7","8","9"], 
 ["9","1","2","3","4","5","6","7","8"], 
 ["8","9","1","2","3","4","5","6","7"], 
 ["7","8","9","1","2","3","4","5","6"], 
 ["6","7","8","9","1","2","3","4","5"], 
 ["5","6","7","8","9","1","2","3","4"], 
 ["4","5","6","7","8","9","1","2","3"], 
 ["3","4","5","6","7","8","9","1","2"], 
 ["1","2","3","4","5","6","7","8","9"]]; // should return False


const grid4 = [["1","2","3","4","5","6","7","8","9"], 
 ["9","1","2","3","4","5","6","7","8"], 
 ["8","9","1","2","3","4","5","6","7"], 
 ["7","8","9","1","2","3","4","5","6"], 
 ["6","7","8","9","1","2","3","4","5"], 
 ["5","6","7","8","9","1","2","3","4"], 
 ["4","5","6","7","8","9","1","2","3"], 
 ["3","4","5","6","7","8","9","1","2"], 
 ["2","3","4","5","6","7","8","9","1"]]; // should return True


function sudoku2(grid) {
    let rowsArr = grid;
    let result = true;
    
    for(let i=0; i < rowsArr.length; i++){
        // for every row let there be a new freqs hash
        let freqs = {};
        
        for(let j=0; j < rowsArr.length; j++){ // can assume a sudoku grid is NxN length
            let num = rowsArr[i][j] // this is how you'd access each column from each row
            if (!(num in freqs)){ freqs[num] = 1;}
            // return false immediately if a number is repeated in the hash (assuming only 1-9 inputs)
            else { return false;}
        }
    }

    let transposeGrid = transpose(grid);
    
    // this for loop is exactly the same as the above except it's looking at
    // the transposed grid
    for(let i=0; i < transposeGrid.length; i++){
        let freqs = {};
        
        for(let j=0; j < transposeGrid.length; j++){
            let num = transposeGrid[i][j]
            if (freqs[num]===undefined){ freqs[num] = 1;}
            else { return false; }
        }
    }
    
    return result;
}

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

console.log(sudoku2(grid));
console.log(sudoku2(grid2));
console.log(sudoku2(grid3));
console.log(sudoku2(grid4));


// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

// if you want to skip writing a transpose function and fit it into
// a single pass through the nested for-loop:


function sudoku3(grid) {
    let rowsArr = grid;
    let result = true;

    for(let i=0; i < rowsArr.length; i++){
        let freqs = {};
        
        for(let j=0; j < rowsArr.length; j++){
            let num = rowsArr[i][j] // every number in each row
            if (!(num in freqs)){
                freqs[num] = 1;
            } else {
                freqs[num]++;
                if (freqs[num] > 2) { return false; }
            }

            let num2 = rowsArr[j][i] // notice i flipped the position of j and i -
            // this gives you every number in each column
            if (!(num2 in freqs)){
                freqs[num2] = 1;
            } else {
                freqs[num2]++;
                if (freqs[num2] > 2) { return false; } // i should expect that
                // if every grid space is filled, there should be a frequency of
                // 2 for each number (once looking across and once looking down)
                // if it exceeds 2 at any point, return false
            }
        }
    }
    
    return result;
}

console.log(sudoku3(grid));
console.log(sudoku3(grid2));
console.log(sudoku3(grid3));
console.log(sudoku3(grid4));