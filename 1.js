var person = { firstName: 'Bill', surname: 'Bradley', age: 27 }; 


function keysOrValues(obj) {
    for (variable in obj){
        if(obj.hasOwnProperty(variable))
        {
            console.log(variable,obj[variable])
            // console.log(obj.hasOwnProperty(variable))
        }
    }
// console.log(obj)
}

keysOrValues(person);
