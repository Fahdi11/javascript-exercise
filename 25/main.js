
// spreaad//

let nunber = [1 , 2 , 3]
let nunbers = [...nunber , 4 , 5 , 6 ,7]

console.log(nunbers)



// Rest Parameter//

function mult (...nunber){
    return nunber.reduce((totol , sum) => totol * sum ,1)

}

console.log(mult(10,10,20,1))