const obj ={
    a: 1,
    b: 2,
    }

    obj.a = 2;

 

    const a = "c"
  

    function check(a, obj) {
        if (a in obj) {
            return true 
                        
        }
        else {return false}
        
    }
  //  check(a, obj)

    console.log(check(a, obj))