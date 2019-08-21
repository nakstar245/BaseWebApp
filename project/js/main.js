$(document).ready(function(){
  getWeather();
})

function getWeather() { 
var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&APPID"+apiKey;

$.ajax(url,{success: function(data){
  console.log(data);
}})

function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("Enjoy these pretty pup. How many can you get?!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}