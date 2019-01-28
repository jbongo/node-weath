
var asyncAdd = (a,b) => {
    // return a + b;  retour immediat synchrone

    return new Promise((resolve, reject)=>{
       
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Les arguments doivent être des nombres');
            }
        },3000)
       
    });
}

var promise1 = asyncAdd('df',12);
var promise2 = asyncAdd(6,12);


promise1
    .then(res => console.log(res)   )  // en cas de succès
    .catch(err => console.log(err)) ; // en cas d'erreur