let score ="33"

console.log(typeof score);
console.log(typeof(score));
let valueInNumber=Number(score)
console.log(typeof valueInNumber);

let scor ="33abc"

let valueInNumber1=Number(scor)
console.log(typeof valueInNumber1);
//33abc : NaN
 
let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
//1=> true; 0 = false
//"" = false
//"satya"=true

let someNumber =33
let StringNumber=String(someNumber);
console.log(StringNumber)
console.log(typeof StringNumber)


//************Operations***************

let value=3
let negValue=-value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);

let str1="hello"
let str2="satyam"

let str3=str1 + str2

console.log(str3)

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

console.log( (3+4)*5%3);

console.log(+true);
console.log(+"");

let num1,num2,num3

num1=num2=num3=2+2
console.log(num1)
//it is not good

let gameCounter=100
//gameCounter++;
++gameCounter;

console.log(gameCounter)