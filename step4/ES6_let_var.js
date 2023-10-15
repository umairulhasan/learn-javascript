// var no error and acceble outside the function scope
function Hello(){

    for(var i=0; i<5; i++){

        console.log(i)
    }
    console.log(i) //accessable 
}

Hello();

// but in let they are not accessible outside the function and give error 
function Hello(){

    for(let i=0; i<5; i++){

        console.log(i)
    }
    console.log(i) //not accessable 
}

Hello();