let str = "ahb acb aeb aeeb adcb axeb";
console.log(str.match(/a[a-z]b/g));

console.log("2+3 223 2223".match(/2[+]3/g));

let date = new Date();
console.log( date.getDate() );
console.log( date.getMonth() + 1 ); 
console.log( date.getFullYear() );  