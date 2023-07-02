//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// // Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed! 

// we can access elements by using their corresponding index. The index of the last element equals (length of array - 1) and index of the 
// first element is [0];

let ages1 = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages1[ages1.length - 1]- ages1[0]);

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

// I used push method to add a new element to an array :
let ages1b = [3, 9, 23, 64, 2, 8, 28, 93];
 ages1b.push(5);
console.log(ages1b);
console.log(ages1b[ages1b.length - 1]- ages1[0]);

//1c. Use a loop to iterate through the array and calculate the average age.

// I used for loop to iterate through each age and add it to the "totalAge" variable. After the loop, i calculate the average age by dividing 
// the total age by the length of an array.
let ages1c = [3, 9, 23, 64, 2, 8, 28, 93];
var totalAges= 0;
for (let i = 0; i < ages1c.length; i++){
totalAges +=ages1c[i];

}
var averageAge = totalAges / ages1c.length;
console.log(averageAge); 


//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//I used for loop, i add the length of each name to the "totalLetters" variable and icreament the "count" variable. After
// the loop i calculate the average number of letters by dividing the total letters by the count. 

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

var totalLetters = 0;
var count = 0;
for (i = 0; i < names.length; i ++){
    totalLetters +=names[i].length; 
    count ++;
}
var averageLetters = totalLetters / count;
console.log( averageLetters);

//3. How do you access the last element of any array?

// we can access elements by using their corresponding index. The index of the last element equals (length of array - 1);

//4.How do you access the first element of any array?
// we can access the first element using its index [0];

//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name 
//to the nameLengths array.

// I used for loop, which iterates over each element and calculates their length and used push method to add length of each name to the new array.

let names2 = ["Kelly", "Sam","Kate"];
let nameLengths = [];

for (let i = 0; i <names2.length; i ++){
nameLengths.push(names2[i].length);
}

console.log( nameLengths);


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

// I initialized a variable sum to 0 and then used a for loop to iterate over each element in the array and add it to the sum variable.  
let nameLengths6 = [5, 3, 4];
let sum = 0;
for (let i = 0; i < nameLengths6.length; i ++){

sum =sum + nameLengths6[i];
}
console.log(sum);


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

// I used the repeat() method. Which repeats the string  n number of times and returns a new string.
function concatenateWord(word, n){
  return word.repeat(n);
}
let result = concatenateWord("Hello", 3);
console.log(result);


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and 
// the last name separated by a space. 

// I used concatenate method to join strings together and create a new string. 
function fullName (firstName, lastName){
    return fullName;
}
console.log ("firstName" + " " + "lastName");

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// I used for loop to calculate the sum of elements and then retured the result of the comparasion betweeen the sum and 100. 
function isSumGreaterThan100(numbers){
    let sum = 0;
  for (i = 0; i < numbers.length; i ++){
    sum +=numbers[i];
  }
  return sum >100
}
let myNumbers = [10, 20, 30, 50];
let result2 = isSumGreaterThan100(myNumbers);
console.log(result2);

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

//This function calculates the sum of all elements using the for loop and then calculates average by dividing the sum by the array's length.

function calculateAverage(numbers){
  if (numbers.length === 0){
    return 0;
  }
let totalSum = 0;
for (let i = 0; i < numbers.length; i ++){
totalSum += numbers [i];
}
let average = totalSum / numbers.length;
return average; 
}
let numbersArray = [1, 2, 3, 4, 5];
let result4 = calculateAverage(numbersArray);
console.log(result4);



//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than 
// the average of the elements in the second array.


//I created two functions. The second function calculates the sum of elements and returs the average. The first function compares averages and 
// returns the result.

function isAverageGreaThan (array1, array2){
    let avg1 = calculateAverage(array1);
    let avg2 = calculateAverage(array2);
  return avg1 >avg2;
}
function calculateAverage(array){
    if (array.length === 0){
        return 0;
    }
    let sum = 0; 
    for (i = 0; i < array.length; i ++){
        sum += array[i];
    }
    return sum / array.length;
}
let firstArray = [10, 20, 30, 40];
let secondArray = [15, 25, 35, 45];
let result3 = isAverageGreaThan(firstArray, secondArray);
console.log(result3);

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot 
// outside and if moneyInPocket is greater than 10.50.
// In this function i used a return statement with the conditon. This condition checks if it is hot outside and if money in pocket is greater 
// than  10.50. If both conditions are met , function returs true;

function willBuyDrink (isHotOutside, moneyInPocket){
  
return isHotOutside === true && moneyInPocket > 10.50;
}

let isHotOutside = true; 
  let moneyInPocket = 20;
  
let result5 = willBuyDrink(isHotOutside, moneyInPocket);
console.log(result5);

// 13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// This function takes openClassGrade and assignmentGrade as parameters and checks whether both grades are greater than or equal to 70. If both
// condition are met, the function returns true and finally the code directly logs "I'll go to the next week" to the console; 
// I created this function because if i pass this assignment, i'll go to the next week. :)
function totalGrades (openClassGrade, assignmentGrade){
  return openClassGrade >=70 && assignmentGrade >= 70;
}
let openClassGrade = 100;
let assignmentGrade = 95;
let result6 = totalGrades(openClassGrade, assignmentGrade);
console.log("I'll go to the next week");
