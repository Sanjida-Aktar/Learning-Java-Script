/*
*Task-5:
*Capitalize Every first Letter of each word in a String
*/
const text = "hello world! welcome to javascript programing language";
console.log(text.replace(/\b\w/g, char=> char.toUpperCase()));