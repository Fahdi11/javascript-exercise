function fechUserDate(){ 

    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            
            let task = false;
            if(task){
                resolve({id:2122 , name:"mc"})
            }else{
                reject("failed")
            }

        },2000);
    });
}

fechUserDate()
.then((date) => console.log(date))
.catch((err) => console.log(err))