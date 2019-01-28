const request = require('request');
const API_KEY = require('./../config');

var getWeather = (lat,lng,callback)=> {
    request({
        url: `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if(error){
            callback('Erreur de connexion', null);
        }else {
            callback(null, body.currently.temperature);
        }
    });
} // #getWeather

module.exports = {
    getWeather
}