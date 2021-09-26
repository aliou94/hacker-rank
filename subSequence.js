function isValidSubsequence(array, sequence) {
    // Write your code here.

    let arrIdx = 0
    let seqIdx = 0

    while( arrIdx < array.length && seqIdx < sequence.length){

        if(array[arrIdx]=== sequence[seqIdx]) seqIdx+=1

        arrIdx+=1

    }

    
    console.log(seqIdx===sequence.length)

    
  }





  isValidSubsequence([1,1,1,1,1], [1,1,1])

