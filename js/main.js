// 1. Takes two number arguments and returns the highest number of the two
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. 
  // Again, the Math.max method is not allowed.
const maxOfThree = function(x, y, z) {
    if(x >= y && x >= z) {
        return x;
    } else if(y >= z) {
        return y;
    } else {
        return z;
    }
  }
  console.log(maxOfThree(15,5,20));

   // 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and 
   // returns true if it is a vowel, false otherwise.
function isCharAVowel(letter) {
    letter = letter.toLowerCase();
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel('a'));

  // 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
  // For example, sumArray([2, 4, 5]); would return 11.
const sumArray = function(arr) {
    let sum = 0;
    for(let i of arr) {
        sum += i;
    }
    return sum;
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
console.log(sumArray(myArray));

  // 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. 
  // For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(arr) {
    let product = 1;
    for(let i of arr) {
        product *= i;
    }
    return product;
}
console.log(multiplyArray(myArray));

  // 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function(arr) {
    return arr.length;
}
console.log(numArgs([1, 2, 3 ,4, 'what', 'here', 8999, 69, 420]));

  // 7. Define a function, as a function declaration, reverseString that takes a string, 
  // reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(thisString) {
    let newString = '';
    const length = thisString.length - 1;
    for (let i = length; i > -1; i--) {
        newString += thisString[i];
    }
    return newString;
}
console.log(reverseString('what'));

  // 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an 
  // argument and returns the length of the longest string
const longestStringInArray = function(strArray) {
    let longest = 0;
    for (let str = 0; str < strArray.length; str++) {
      newHolder = strArray[str];
      if(strArray[longest].toString().length < strArray[str].toString().length) {
        longest = str;
      }
    }
    return strArray[longest];
}
const myStringArray = ["OhMyGosh", "Burn", "Flow", "Lattitude and Longitude", "eww", "Everything Everywhere All at once"];
console.log(longestStringInArray(myStringArray));

  // 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; 
  // and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
  // would return ["hello", "morning"].
function stringsLongerThan(thisArray, len) {
  let newArray = [];
  for(let str of thisArray) {
    if(str.length > len) {
      newArray.push(str);
    }
  }
  return newArray;
}
console.log(stringsLongerThan(myStringArray, 5));