// https://www.hackerrank.com/challenges/between-two-sets/problem

// pseudo 

// 1. find the LCM of all the integers of array A.
// 2. find the GCD of all the integers of array B.
// 3. Count the number of multiples of LCM that evenly divides the GCD.

a = [2,4]

b = [16, 32, 96]

rangeArr = []
commonFactorArr = []
commonDivider = []


// function getTotalX(a,b) {
    
// maxIntA = Math.max(...a)
// minIntB = Math.min(...b)


// if(maxIntA > minIntB){
//     return 0
// } else {

//     for( i = maxIntA; i <= minIntB; i++)  rangeArr.push(i)

//     for (i=0; i < rangeArr.length; i++)
//        a.every( (item)=> rangeArr[i] % item === 0) ? commonFactorArr.push(rangeArr[i]):null

//     for ( i=0;  i < commonFactorArr.length; i++) 
//       b.every( (item)=> item % commonFactorArr[i] === 0) ? commonDivider.push(commonFactorArr[i]):null
           
// }

// return commonDivider.length

// }


function getTotalX(a,b) {
    let count = 0

    for(i=1 ; i<= 100; i++)
        a.every(item => i%item === 0) ? 
        b.every(item=>item%i ===0) ? count++ : null
        : null
        
      return  count
}

getTotalX(a,b)