const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {                            
            demand:true,
            alias: 'address',
            describe:'Adresse dont on veut obtenir les coordonnées',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;

// console.log(argv.address);
geocode.geocodeAdresse(argv.address, (errorMessage, results) => {
    
    if(errorMessage){
        console.log(errorMessage);
        
    }else{
        // console.log(results.lat);
        // console.log(results.lng);

        weather.getWeather(results.lat, results.lng, (err, resp) => {
            if(err){
                console.log(err);
                
            }else{
                console.log(`La temperature pour cette adresse est ${resp}`);
                
            }
        });
        
    }
})