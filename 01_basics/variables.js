const accountId = 12345;
let accountName = "Rohan"; // Prefer this type of variables define
var accountEmail = "rohan@gmail.com"; 
accountType="Normal";

console.log(accountId);
console.log(accountName);

//or

console.table([accountId,accountEmail,accountName,accountType]);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/