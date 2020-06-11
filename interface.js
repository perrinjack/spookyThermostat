$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();
  getLocalTemperature();

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

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function getLocalTemperature() {
    $.get(
      'https://api.openweathermap.org/data/2.5/weather?q=London&appid=5b2dae444f451caa1202ad68612bba91',
      function (weatherResponse) {
        $('#temperature').text(weatherResponse.main.temp - 278);
      }
    );
  }
});
