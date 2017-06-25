/*
 * Copyright (c) 2014-2017 Cesanta Software Limited
 * All rights reserved
 *
 * This example demonstrates how to use mJS Arduino Adafruit_LIS3DH
 * library API to get data from LIS3DH accelerometer.
 */

// Load Mongoose OS API
load('api_timer.js');
load('api_arduino_lis3dh.js');

// Accelerometer address
let sens_addr = 0x18;  // Change this to 0x19 for alternative i2c address
// Initialize Adafruit_LIS3DH library
let lis = Adafruit_LIS3DH.create();
// Initialize the sensor
if (lis.begin(sens_addr) === 0) {
  print('Cant find a sensor');
} else {
  lis.setRange(LIS3DH_RANGE_4_G);   // 2, 4, 8 or 16 G!

  print('Range = ', lis.getRange(), 'G');

  // This function reads data from the LIS3DH sensor every 2 seconds
  Timer.set(2000 /* milliseconds */, true /* repeat */, function() {
    lis.read();      // Get X Y and Z data at once
  
    // Then print out the raw data
    print('X: ', lis.x, 'Y: ', lis.y, 'Z: ', lis.z); 
  }, null);
}
