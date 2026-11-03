function operate (a,b, callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}


function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}


function div(a,b){
    return a/b;
}


console.log("xisaab")

console.log("addition:",operate(50,20 , add))
console.log("subtract:" , operate(50,30 , sub))
console.log("multiple:",operate(50,30, mult))
console.log("divide:" ,operate(50,30 ,div))