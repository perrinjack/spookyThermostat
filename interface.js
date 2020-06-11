$(document).ready(function() {
  var thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(function() {
      thermostat.up();
      updateTemperature();
    });

    $('#temperature-down').click(function() {
      thermostat.down();
      updateTemperature();
    });

    $('#temperature-reset').click(function() {
      thermostat.reset();
      updateTemperature();
    });

    $('#powersaving-on').click(function() {
      thermostat.powerSaveModeOn();
      updateTemperature();
    });

    $('#powersaving-off').click(function() {
      thermostat.powerSaveModeOff();
      $('#power-saving-status').text('OFF')
      updateTemperature();

    });

    $('#powersaving-on').click(function() {
      thermostat.powerSaveModeOn();
      $('#power-saving-status').text('ON')
      updateTemperature();
    });

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      if(thermostat.energyUsage() === 'low-usage') {
      $('#temperature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'medium-usage') {
      $('#temperature').css('color', 'black')
    } else {
      $('#temperature').css('color', 'red')
    }
}
  });