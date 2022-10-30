var num = 89;

let numSqrt = Math.floor(Math.sqrt(num));

for(let i =2; i <= numSqrt; i++) {
    if(num % i == 0) {
        console.log("não. ");
    }
    console.log(i);
}
console.log("fim")