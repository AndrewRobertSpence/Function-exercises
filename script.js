function welcomeMessage() {
  console.log("Welcome to Javascript Programming!");
}
welcomeMessage();

const hello = "hello";

hello;

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 2));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(4, 2));

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

console.log(multiplyNumbers(3, 2));

function squareNumber(number) {
  return number * number;
}

console.log(squareNumber(3));

function isPositive(number) {
  return number > 0;
}

console.log(isPositive(-2));

function concatenateStrings(string1, string2) {
  return string1 + " " + string2;
}

console.log(concatenateStrings("Hello", "there"));

function lowercaseAllLetters(string) {
  return string.toLowerCase();
}

console.log(lowercaseAllLetters("HELLO"));

function repeatWord(string, times) {
  if (times <= 0) return "";
  if (times === 1) return string;
  else return string + repeatWord(string, times - 1);
}

console.log(repeatWord("Hello", 3));

function minutesToSeconds(minutes) {
  return minutes * 60;
}

console.log(minutesToSeconds(5));

function ageInDays(years) {
  return years * 365;
}

console.log(ageInDays(49));

function findMax(num1, num2) {
  if (num1 > num2) return num1;
  if (num1 === num2) return "These numbers are equal";
  else return num2;
}

console.log(findMax(4, 2));

function findMin(num1, num2) {
  if (num1 < num2) return num1;
  if (num1 === num2) return "These numbers are equal";
  else return num2;
}

console.log(findMin(4, 2));

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));

function rectangleArea(length, width) {
  return length * width;
}

console.log(rectangleArea(10, 20));

function countCharacters(string) {
  return string.length;
}

console.log(countCharacters("Hello"));

function weatherAdvice(temperature) {
  if (temperature > 25) return "Apply some sunscreen, it's hot";
  if (temperature > 15 && temperature < 25) return "It is so pleasant today";
  else return "It is cold today wear a jacket";
}

console.log(weatherAdvice(16));

function calculateBMI(weight, height) {
  let BMI = weight / (height * height);
  return BMI;
}

console.log(calculateBMI(75, 1.77));

function validateAge(age) {
  return age > 18;
}

console.log(validateAge(19));

function dailyPlanner(dayOfWeek) {
  if (
    dayOfWeek === "Monday" ||
    dayOfWeek === "Tuesday" ||
    dayOfWeek === "Wednesday"
  )
    return "Today is gym day";
  else return "It is time to code";
}

console.log(dailyPlanner("Thursday"));

function calculateInterest(principal, rate, time) {
  rate = rate / 100;
  interest = (principal * rate * time);
  return interest;
}

console.log(calculateInterest(10000, 10, 2));
