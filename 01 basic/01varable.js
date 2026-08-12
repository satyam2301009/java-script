const accountId=15665
let accountEmail ="satyamjaiswaol623@gmail.com"
var accountPassword="12345"
accountCity="noida"
let accountState;  // undefined

//accountId=2 : not allow
console.log(accountId)
/*
prefer not use to var because in issue of 
block scope and functional scope
*/

accountEmail="hjghjgjh.com"
accountPassword="61235"
accountCity="greater noida"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


