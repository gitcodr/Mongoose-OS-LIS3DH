// Arduino Adafruit_LIS3DH library API. Source C API is defined at:
// [mgos_arduino_lis3dh.h](https://github.com/mongoose-os-libs/arduino-adafruit-lis3dh/blob/master/src/mgos_arduino_lis3dh.h)

load('api_math.js');

let Adafruit_LIS3DH = {
  // Error codes
  RES_FAIL: -100.0,

  _create: ffi('void *mgos_lis3dh_create(void)'),
  _close: ffi('void mgos_lis3dh_close(void *)'),
  _begin: ffi('bool mgos_lis3dh_begin(void *, int)'),
  _r: ffi('void mgos_lis3dh_read(void*)'),
  _ra: ffi('int mgos_lis3dh_readADC(void *, int)'),
  _sc: ffi('void mgos_lis3dh_setClick(void *, int, int, int, int, int);'),
  _gc: ffi('int mgos_lis3dh_getClick(void *)'),
  _sr: ffi('void mgos_lis3dh_setRange(void *, char)'),
  _gr: ffi('char mgos_lis3dh_getRange(void *)'),
  _sdr: ffi('void mgos_lis3dh_setDataRate(void *, char)'),
  _gdr: ffi('char mgos_lis3dh_getDataRate(void *)'),

  LIS3DH_RANGE_16_G:              0b11,    // +/- 16g
  LIS3DH_RANGE_8_G:               0b10,    // +/- 8g
  LIS3DH_RANGE_4_G:               0b01,    // +/- 4g
  LIS3DH_RANGE_2_G:               0b00,    // +/- 2g (default value)
  LIS3DH_DATARATE_400_HZ:         0b0111,  // 400Hz 
  LIS3DH_DATARATE_200_HZ:         0b0110,  // 200Hz
  LIS3DH_DATARATE_100_HZ:         0b0101,  // 100Hz
  LIS3DH_DATARATE_50_HZ:          0b0100,  //  50Hz
  LIS3DH_DATARATE_25_HZ:          0b0011,  //  25Hz
  LIS3DH_DATARATE_10_HZ:          0b0010,  //  10Hz
  LIS3DH_DATARATE_1_HZ:           0b0001,  //   1Hz
  LIS3DH_DATARATE_POWERDOWN:      0,
  LIS3DH_DATARATE_LOWPOWER_1K6HZ: 0b1000,
  LIS3DH_DATARATE_LOWPOWER_5KHZ:  0b1001,

  _proto: {
    // Close Adafruit_LIS3DH handle. Return value: none.
    close: function() {
      return Adafruit_LIS3DH._close(this.bme);
    },

    // Initialize the sensor with given parameters/settings.
    // Returns 0 if the sensor not plugged or a checking failed,
    // i.e. the chip ID is incorrect.
    // Returns 1 otherwise.
    begin: function(i2caddr) {
      return Adafruit_LIS3DH._begin(this.bme, i2caddr);
    },

    // Read x y z at once
    read: function() {
      return Adafruit_LIS3DH._r(this.bme);
    },

    // Read the auxilary ADC
    readADC: function(adc) {
      return Adafruit_LIS3DH._ra(this.bme, adc);
    },

    // Set INT to output for single or double click
    setClick: function(c, clickthresh, timelimit, timelatency, timewindow) {
      return Adafruit_LIS3DH._sc(this.bme, c, clickthresh, timelimit, timelatency, timewindow);
    },

    getClick: function() {
      return Adafruit_LIS3DH._gc(this.bme);
    },

    // Sets the g range for the accelerometer
    setRange: function(range) {
      return Adafruit_LIS3DH._sr(this.bme, range);
    },

    // Gets the g range for the accelerometer
    getRange: function() {
      return Adafruit_LIS3DH._gr(this.bme);
    },

    // Sets the data rate for the LIS3DH (controls power consumption)
    setDataRate: function(dataRate) {
      return Adafruit_LIS3DH._sdr(this.bme, dataRate);
    },

    // Gets the data rate for the LIS3DH (controls power consumption)
    getDataRate: function() {
      return Adafruit_LIS3DH._gdre(this.bme);
    },
  },

  create: function() {
    let obj = Object.create(Adafruit_LIS3DH._proto);
    // Initialize Adafruit_LIS3DH library.
    // Return value: handle opaque pointer.
    obj.bme = Adafruit_LIS3DH._create();
    return obj;
  },
};
