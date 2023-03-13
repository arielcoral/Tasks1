// משימה ראשונה

// /**
//  * 
//  * @param {*} wordArr The array with all the words
//  * @param {*} index Performs the test on the entire array
//  * @param {*} output The array that includes only words that start with the letter 'a'
//  * @returns Returns from the function
//  */
// function filterWords(wordArr, index = 0, output = []){
//     // אם אורך המערך שווה לאינדקס אז תחזיר את המערך שמות שמתחיל ב A
//     if(index >= wordArr.length){
//         return output;
//     }
//     if(wordArr[index][0] === 'a'){
//         output.push(wordArr[index]);
//     }
//     // חזרה על הפונקציה והספה של מספר לאינדקס
//     return filterWords(wordArr, ++index, output);
// }
// // מערך המילים המלא
// var namesArray = ['ariel', 'noam' ,'alon'];  
// // מערך המילים שמתחיל באות 'a'  
// var result = filterWords(namesArray); //['ariel'] 
// console.log('The words that start with A -' + result)

// משימה שניה 

// function filterNumbers(numberArray, outpot = [], index = 0,){
//     if(index >= numberArray.length){
//         return outpot;
//     }
//     var ariel = numberArray[index];
//     if(ariel %2 == 1){
//         outpot.push(ariel);
//     }
//     return filterNumbers(numberArray, outpot, index + 1);
// }

// var numbers = [1,2,3,4,5,6,7,87];
// var result = filterNumbers(numbers);
// console.log(result)

// משימה שלישית 

// var months = ['breal', 'noam', 'alon', 'ariel'];
// months.sort();
// console.log(months);


// משימה ארבע

// function convertToUppercase(arr) {
//     if (arr.length === 0) {
//       return [];
//     } else {
//       const upperCaseLetter = arr[0].toUpperCase();
//       const remainingArray = arr.slice(1);
//       const resultArray = convertToUppercase(remainingArray);
//       return [upperCaseLetter, ...resultArray];
//     }
//   }
// const lowercaseArray = ['a', 'b', 'c', 'd'];
// const uppercaseArray = convertToUppercase(lowercaseArray);
// console.log(uppercaseArray);