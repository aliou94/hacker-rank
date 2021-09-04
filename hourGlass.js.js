// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
    // Write your code here
    let counter = -1000 
    for( let i=0 ; i< 4 ; i++){ 

        for( let j=0; j < 4 ; j++){

            let hourGlass = (
                    arr[i][j] + arr[i][j+1] + arr[i][j+2]
                        +
                     arr[i+1][j+1] 
                        +
                    arr[i+2][j]+ arr[i+2][j+1] + arr[i+2][j+2]
    )
            if (hourGlass > counter) counter = hourGlass 
        }
        }
    return counter}