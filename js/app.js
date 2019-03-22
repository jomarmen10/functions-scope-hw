// 1. Verbal questions
// Write answers to the following questions as comments.
//
// What is the difference between a parameter and an argument?
// Within a function, what is the difference between return and console.log?
// What are the implications of the ability of a function to return a value?

// Answers//
// parameter is the place holder for argument in a function.
//
// console.log("only prints in console it doesnt give you any value")
// return spits out the value of the function
//
// it gives you a value after you run the function


/*
2. Palindrome again.
Write a function checkPalindrome that accepts a single argument, a string.
 Yes, you've done it before, but do it again. Later in this assignment we're gonna
  beef up our palindrome function some. See if you can do it without looking back
  at your previous answer. The function should return true if the string is a palindrome,
   false if not. Make sure your function will give the correct answer for words with capital letters.
*///

function checkPalidrom(string){
  let revStr ="";
  for(let i = string.length-1; i >=0; i--){
      revStr += string[i]
    }
  if(revStr === string){
    return true;
  } else {
    return false;
  }
}
//console.log(checkPalidrom("radar"))



function sumDigit(num){
  let stringNum = num.toString()
  let result = 0
  for(let i = 0; i < stringNum.length; i++){
    result +=  parseInt(stringNum[i]);
  }
  return result;
}

//console.log(sumDigit(22))

// my guide https://www.mathplanet.com/education/pre-algebra/right-triangles-and-algebra/the-pythagorean-theorem

function calculateSide(sideA, sideB){
  let sideC = Math.sqrt(((sideA * sideA) + (sideB * sideB)))
  return sideC;
}

//console.log(calculateSide(8,6))


//Write a function sumArray that takes an array as an argument. The array should contain numbers.
//The function should return the sum of the numbers in the array.


function sumArray(arr){
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result;
}

//console.log(sumArray([1, 2, 3, 4, 5, 6]))

/*Step One
Write a function called checkPrime that will test whether a number is Prime.
The function will return true (Boolean) if Prime, false if not. Hint: Check every
number up to the square root. To do this, try a for loop.
*/

function checkPrime(num){
  if(num === 1 || num === 2 || num === 3){
    return true;
  }
  else if(num % 2 !== 0 && num % 3 !== 0){
    return true;
  } else {
    return false;
  }
}


// function primeLoop(num){
//   let result = Math.sqrt(num);
//   for(let i = 2; i < result; i++){
//     if(result % i === 0){
//       return false;
//     }
//     return true
//   }
// }

//console.log(Math.sqrt(8))

function primeLoopTwo(num){
  if(num === 1 ) return false
  if(num === 2) return true;
  for(let i = 0; i < num; i++){
    if(num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    return true;
  }
}

//console.log(primeLoopTwo(7))


// function printPrime(num){
//   let result = [];
//   if(primeLoopTwo(num)){
//     result.push(num)
//   } else {
//     result.push(num)
//   }
//   return result;
// }

function printPrimeLoop(num){
  let result = [];
  for(let i = 0; i <= num; i++){
    if(primeLoopTwo(i)){
      result.push(i)
    }
  }
  return result
}


console.log(printPrimeLoop(68))
