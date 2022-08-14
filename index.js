let name = "Karen"; 
function first(text) {    
    return text + " first";
} 
function second(str, funcName) { 
    return (funcName(str) + " second")
} 

function third(name) {    
    return name + " third";
}

console.log(first(name));  
console.log(second("Kile", first)); 
console.log(second("Kile", third)); 
console.log(second("Kile", name => {
    return name + " fourth";
    }   
)); 
console.log(second(first(name)));
