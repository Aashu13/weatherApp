$(document).ready(function () {
  console.log(tempDiv);


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longtitude = position.coords.longitude;
      var weather_api =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        latitude +
        "&lon=" +
        longtitude;

      $.getJSON(weather_api, function (data) {
        var temp = data.main.temp;
        var location = data.name;
        var humidity = data.main.humidity;
        var AirSpeed = data.wind.speed;
        var minTemp = data.main.temp_min;

        var Temprature = document.createElement("span");
        Temprature.textContent = temp;

        var Humidity = document.createElement("span");
        Humidity.textContent = humidity;

        var minTemprature = document.createElement('span');
        minTemprature.textContent = minTemp;

        var airSpeed = document.createElement('span');
        airSpeed.textContent = AirSpeed;

        if (temp < 20) {

          document.getElementById('currentLocation').style.backgroundImage = "url('./images/clouds-clip-art-15.jpg')";


        }



        document.getElementById("location").innerText = location;
        document.getElementById("tempDiv").appendChild(Temprature);
        document.getElementById("humidity_Div").appendChild(Humidity);
        document.getElementById("min_tempDiv").appendChild(minTemprature);
        document.getElementById("air_div").appendChild(airSpeed);
      }); /* close prantheses for get json function */
    });
  }
});