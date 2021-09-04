// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


let n = 7
let ar = [1,2,1,2,1,3,3,3,2]

function sockMerchant(n, ar) {
    // Write your code here
  let count  = 0
    ar.sort((a, b)=> a- b)

    console.log(ar)

    for (let i=0; i<ar.length; i++){

    if( ar[i] === ar[i+1] ){

      console.log(count,":", i, ":", ar[i] )
          count++
            i += 1
    }

    }

    console.log(count)


}

sockMerchant(n, ar)
