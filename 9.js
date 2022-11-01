//This code find the answer but I will study more about the subject to better this code.

let a, b, c;
let s = 1000; // That is the circunference of the triangle.
// Since a < b < c, then a < s/3 and b < s/2, and c = s - a - b

function productFromArr(arr =[]) {
    let p =1;
    arr.forEach(value => p *= value);
    return p;
}

for(a = 1; a < s/3; a++) {
    for(b = a; b < s/2; b++){
        c = s - a - b;

        if(Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
            console.log(`a = ${a} -- b = ${b} -- c = ${c}`);
            console.log("Product is: " + productFromArr([a,b,c]));
        }
    }
}

console.log("End.")
