function printText(text){
console.log(text)    
}

function myFunction(anyString, timeDelay){   
setTimeout(printText,timeDelay,anyString)
}

myFunction("Hello, my friend",10000)
