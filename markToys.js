
function maximumToys(prices, k) {
let count = 0
    prices.sort((a,b)=> a-b)

   prices.forEach(price => {
       
    if(k > price) {

        k = k-price
       
        count++
    }

   });
    
 
 return  count
 
}


maximumToys([1,12,5,111,200,1000,10], 750);


