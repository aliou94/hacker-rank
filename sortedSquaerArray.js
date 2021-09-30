function sortedSquaredArray(array) {
    // Write your code here.
    // create an array and assign a length to that array 
    let sortedArray = new Array(array.length).fill(0)
    let smallerIdx = 0
    let largerIdx = array.length-1
//loop an array backwards
    for(let i= array.length-1; i>=0; i--){

        let smallerValue = array[smallerIdx]
        let largerValue = array[largerIdx]

        if(Math.abs(smallerValue)> Math.abs(largerValue)){
             
           sortedArray[i] = smallerValue*smallerValue
           smallerIdx++


        } else{
            sortedArray[i] = largerValue*largerValue
            largerIdx--
        }
    }

    console.log(sortedArray)
  return sortedArray
}



 sortedSquaredArray( [-5, -4, -3, -2, -1])