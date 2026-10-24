function userDate (){
    alert("open this function")
    return{name:"mohamed" , id: 1200 , city:"muqdisho"}
}


console.log("tijaabo")

let user = userDate()

console.log(user)



// step 2


function userDateTwo(callback){
    setTimeout(() =>{
        let user = {name:"mohamed" , id: 1200 , city:"muqdisho"}
        callback(user)
    }, 2000)
}

console.log("tijaabo")

userDateTwo(function(user){
    console.log(user)
})


console.log("test of last")