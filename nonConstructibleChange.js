// Write whatever you want here.

// array of +ve # rep the values of coin in possesion

// write a function that returns a minimum amount of change 

// that you can not create

function nonConstructibleChange(coins) {
    // Write your code here.

coins.sort((a,b)=> a-b)

let currentChange = 0

coins.array.forEach(coin => {
    
    coin > currentChange + 1 ? currentChange + 1  : currentChange +=t  coin

});


    return currentChange + 1;
  }


  nonConstructibleChange([5,7,1,1,2,3,22])