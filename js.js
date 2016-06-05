var a = Number.MAX_VALUE;

console.log(a)




 console.log(Number.MAX_VALUE, Number.MIN_VALUE)  //1.7976931348623157e+308 5e-324

console.log(Number.MAX_VALUE + 1)

console.log(Infinity)
 
//  The MAX_VALUE property has a value of approximately 1.79E+308. Values larger than MAX_VALUE are represented as "Infinity".

// Because MAX_VALUE is a static property of Number, you always use it as Number.MAX_VALUE, rather than as a property of a Number object you created.


// You do not have to create a Number object to access this static property (use Number.Number.MAX_VALUE).

console.log(Number.MAX_VALUE === Number.POSITIVE_INFINITY)  //false

console.log(Number.MAX_VALUE + 10=== Number.POSITIVE_INFINITY)  //says false dont know

console.log(Number.MAX_VALUE * 2=== Number.POSITIVE_INFINITY)   //says true dont know

// (Infinity>100)
// => true

// //also worth noting
// Infinity - 1 == Infinity
// => true

// Math.pow(2,1024) === Infinity
// => true