$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();
  // location();

  $('#temperature-up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.powerSaveModeOn();
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.powerSaveModeOff();
    $('#power-saving-status').text('OFF');
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.powerSaveModeOn();
    $('#power-saving-status').text('ON');
    updateTemperature();
  });

  $('#updateWeather').click(function () {
    location();
    getLocalTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function getLocalTemperature(){
    var url = new URL('https://api.openweathermap.org/data/2.5/weather?q=&appid=5b2dae444f451caa1202ad68612bba91');
    var search_params = url.searchParams;
    search_params.set('q',location())
    var new_url = url.toString();
    $.get(new_url,
      function (weatherResponse) {
        console.log(weatherResponse.main.temp - 278)
        $('#getLocalTemperature').text(Math.round(weatherResponse.main.temp - 278));
      }
    );
  }

  function location() {
    var n = document.getElementById('location').value
    console.log(n);
    return (n);
  }
});