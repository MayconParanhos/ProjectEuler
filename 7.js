function isMulti3(num) {
    if(num > 3) {
        if(num % 3 == 0) {
            return true;
        }else {
            return false;
        }
    }
}
function isMulti5(num) {
    if(num > 5) {
        if(num % 5 == 0) {
            return true;
        }else  {
            return false;
        }
    }
}
function isMulti7(num) {
    if(num > 7) {
        if(num % 7 == 0) {
            return true;
        }else {
            return false;
        }
    }
}





function isPrime(num) {
   if(num == 1) return false; // 1 is not prime

   // Let's get the square root and round down the result.
   let numSqrt = Math.floor(Math.sqrt(num));

   //Let's cut off even numbers at first. I will explain later.
   for(let i =2; i <= numSqrt; i++) {
    if(num % i == 0) {
        return false;
    }
   }
   return true;
}

let arr = [];
for(let i = 1; i<=110000; i++) {
    if(isPrime(i)) {
        arr.push(i);
    }
}


console.log(arr[10001 - 1]); // show the 10001st prime.