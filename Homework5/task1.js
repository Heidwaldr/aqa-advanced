console.log("Declaration function")
function calculateAreaRectangle(width, height){ 
   return width * height
}
console.log(calculateAreaRectangle(10,20))

// ---------

console.log("Expression function")
var expressionFunction = function calculateAreaRectangle(width, height){ 
    return width * height
 }
 console.log(expressionFunction(20, 30))

// -----------

console.log("Arrow function")
const calculatearea = (width, height) => width * height
console.log(calculatearea(7,11))