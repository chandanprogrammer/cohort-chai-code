let myArray = [1, 4, 2, 3, 5, 6]

function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum  + arr[i];
    }
    return sum;
}

console.log(sumOfArray(myArray));
