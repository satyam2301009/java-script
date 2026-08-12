// primitive : call by value

// 7 types: String ,Number, Boolean , null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);


const bigNumber = 345625156156646454n
console.log(typeof bigNumber)


//Reference(Non primitive)

//Array , Objects , Functions 

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"satyam",
    age:22,

}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof myFunction )


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive), Heap(Non-primitive)

let name="satyamjaiswal" // => stack
let anothername =name

anothername="satyam"

console.log(name);
console.log(anothername);

let user={
    email:"user@gmail.com",
    upiId:"user@ybl",
}
let userTwo=user
userTwo.email="satyam@gmail.com"

console.log(user.email)
console.log(userTwo.email)