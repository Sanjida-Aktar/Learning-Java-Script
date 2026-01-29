/*
*Task-3:
*Count how many times a string has the letter a or A
*/
const str = "javascript is a programming language";
let Count =0;
for(let i=0; i<str.length; i++){
    if( str[i]=== 'a' || str[i]==='A')
    {
        Count++;
    }
}
console.log(Count);