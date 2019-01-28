// Exemple illustrant le mécanisme du callback

//************ VERSION SYNCHRONE */
    // var getUser = (id, callback) =>{

    //     var user = {
    //         id:id,
    //         name:"Roger Perrin"
    //     }

    //     // exécution synchrone
    //     callback(user);
    // }



    // getUser(5, (userObject) => {  // ()=> fonction anonyme..... ou function ()=>

    //     console.log(userObject);
        
    // });



//  ************** VERSION ASSYNCHRONE ******

var getUser = (id, callback) =>{

    var user = {
        id:id,
        name:"Roger Perrin"
    }
console.log("merci, fini");

    // exécution assynchrone
   
    setTimeout(()=>{
        callback(user);
    },3000)
}


    getUser(5, (userObject) => {  // ()=> fonction anonyme..... ou function ()=>

        console.log(userObject);
        
    });