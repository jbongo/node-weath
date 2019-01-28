const request = require('request');
const API_KEY = require('./../config');

var geocodeAdresse = (address, callback) =>{
    
    var addressEncoded = encodeURIComponent(address);  // encode directement à cause des accents, caractère spéciaux

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=${API_KEY}`,
        json:true,
    }, (error,response,body) => {   // les trois arguments sont obligatoires
        if(error){
            callback('Connexion au serveur impossible',null);
        }else if(body.status === 'ZERO_RESULTS') { // voir la doc geo google 
            callback('Aucun resultat',null);
        }else if(body.status === 'OK') { 
            callback(null,{
                address : body.results[0].formatted_address,
                lat : body.results[0].geometry.lat,
                lng : body.results[0].geometry.lng,
            });
        }else{
            console.log('rien');
        }
    }); // #results
}

module.exports = {
    geocodeAdresse
}