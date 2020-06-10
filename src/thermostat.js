class Thermostat {
  constructor() {
    this.temperature = 20;
    this._MIN_TEMP = 10;
    this._MAX_TEMP_PS = 25;
    this._MAX_TEMP_PS_OFF = 32;
    this.powerSaveMode = true;
  }

  getCurrentTemp () {
    return this.temperature
  }
  up() {
    if (this.temperature === this._MAX_TEMP_PS && this.powerSaveMode === true) {
      return;
    }
    else if (this.temperature === this._MAX_TEMP_PS_OFF && this.powerSaveMode === false) {
      return;
    }
      this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return this.temperature;
    }
    this.temperature -= 1
  }
  isMinimumTemperature() {
    return this.temperature === this._MIN_TEMP;
  }
  isInPowerSaveMode() {
    return this.powerSaveMode;
  }
  powerSaveModeOff() {
    this.powerSaveMode = false;
    console.log("PowerSave Mode De-activated")
  }
  powerSaveModeOn() {
    this.powerSaveMode = true;
    console.log("PowerSave Mode Activated")
  }
  reset() {
    this.temperature = 20;
    console.log("Temperature Reset")
  }
  energyUsage() {
    if (this.temperature < 18) { return 'low-usage' ; }
    else if (this.temperature > 25) { return 'high-usage' ; }
    else { return 'medium-usage' ; }
  }


}
