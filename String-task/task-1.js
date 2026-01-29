/*
*Task-1:
*Count how many times a string has the letter a
*/
const str = "javascript is a programming language";
let Count =0;
for(let i=0; i<str.length; i++){
    if( str[i]=== 'a')
    {
        Count++;
    }
}
console.log(Count);