// YOUR SCRIPTS GO HERE



// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show();

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.city').text(weather.city);
        $('.day').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
        $('.temp').text(weather.temp);
        
        console.log(weather.code);
      
      // If Sunny `code` between 31 and 36       
      if (weather.code >= 31 && weather.code <= 36 ) {
        
        $('body').addClass('sunny');
        
      }
      
       // If Cloudy `code` between 31 and 36       
      if (weather.code >= 26 && weather.code <= 30 ) {
        
        $('body').addClass('cloudy');
        
      }
      
      // If Rainy `code` between 31 and 36       
      if (weather.code >= 5 && weather.code <= 14 ) {
        
        $('body').addClass('rainy');
        
      }
        
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};
// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

$.simpleWeather({
  location: 99004,
  unit: 'f',
  success: function(weather) {
    // Entire weather object
    console.log(weather);

    // Display Data : Day 1
    $('.forecast figure:nth-child(1) .next-day').text(weather.forecast[0].day);
    $('.forecast figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('.forecast figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('.forecast figure:nth-child(1) img').attr('src', weather.forecast[0].image);

    // Display Data : Day 2
    $('.forecast figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('.forecast figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('.forecast figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('.forecast figure:nth-child(2) img').attr('src', weather.forecast[1].image);

    // Display Data : Day 3
    $('.forecast figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('.forecast figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('.forecast figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('.forecast figure:nth-child(3) img').attr('src', weather.forecast[2].image);

    // Display Data : Day 4
    $('.forecast figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('.forecast figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('.forecast figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('.forecast figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('.forecast figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('.forecast figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('.forecast figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('.forecast figure:nth-child(5) img').attr('src', weather.forecast[4].image);

    // Display Data : Day 6
    $('.forecast figure:nth-child(6) .next-day').text(weather.forecast[5].day);
    $('.forecast figure:nth-child(6) .low').text(weather.forecast[5].low);
    $('.forecast figure:nth-child(6) .high').text(weather.forecast[5].high);
    $('.forecast figure:nth-child(6) img').attr('src', weather.forecast[5].image);

    // Display Data : Day 7
    $('.forecast figure:nth-child(7) .next-day').text(weather.forecast[6].day);
    $('.forecast figure:nth-child(7) .low').text(weather.forecast[6].low);
    $('.forecast figure:nth-child(7) .high').text(weather.forecast[6].high);
    $('.forecast figure:nth-child(7) img').attr('src', weather.forecast[6].image);

  },
  error: function(error) {
    // Show if weather cannot be retreived
    console.log('Look outside.');
  }

});