console.log('starting script...');

// var timestamp = Date.now() + 3000;
// while(Date.now() < timestamp);
//     console.log('running the while loop...');



let cities = ['Lagos', 'Cape Town', 'Abuja', 'JHB', 'Calabar', 'Mexico City'];
cities.forEach(function(city, index){
    setTimeout(function(){console.log(`${index}. ${city}`)}, 3000);
});

console.log('end of script!');