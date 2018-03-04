$(document).ready(function() {
  console.log(tempDiv);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longtitude = position.coords.longitude;
      var weather_api =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        latitude +
        "&lon=" +
        longtitude;

      $.getJSON(weather_api, function(data) {
        var temp = data.main.temp;
        var location = data.name;
        var humidity = data.main.humidity;
        var AirSpeed = data.wind.speed;

        $("#location").html(location);
        $("#temp").html(temp + "&#8451");
        $("#humidity").html(humidity);
        $("#Air_speed").html(AirSpeed);

        var Ftemp = (temp * 9 / 5 + 32).toFixed(0);
        var sweap = false;

        $("#temp").on("click", function() {
          if (sweap == false) {
            $("#temp").html(Ftemp + "&#8457");
            sweap = true;
          } else {
            $("#temp").html(temp + "&#8451");
            sweap = false;
          }
        });

        function checkWeather() {
          if (temp >= 32) {
            $(".icon").append("<i class='fa fa-sun-o fa-5x'></i>");
            $("#thermometer").html("<i class='fa fa-thermometer-2'>");
          }

          if (temp <= 30) {
            $(".icon").append("<i class='fa fa-cloud fa-5x'></i>");
            $("#thermometer").html("<i class='fa fa-thermometer-1'>");
          }
        }

        checkWeather();
      }); /* close prantheses for get json function */
    });
  }
});
