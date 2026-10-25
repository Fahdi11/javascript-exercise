// let user = {
//     name:"mc",
//     id : 210,
//     city : "glk",

// };

// console.log(user)



// //object to JS
// const  jsonuser = JSON.stringify(user)
// console.log(jsonuser)




// //JS to object
// const jsonuserOne = JSON.parse(jsonuser)
// console.log(jsonuserOne)

async function fetchDate(){

    const response = await fetch(`date.json`)

    const  date = await response.json()
    console.log(date)
}


fetchDate()