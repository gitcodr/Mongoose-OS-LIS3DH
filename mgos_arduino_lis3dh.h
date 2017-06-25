/*
 * Copyright (c) 2014-2017 Cesanta Software Limited
 * All rights reserved
 *
 * Arduino Adafruit_LIS3DH library API wrapper
 */

#include "Adafruit_LIS3DH.h"

#ifdef __cplusplus
extern "C"
{
#endif

#define MGOS_LIS3DH_RES_FAIL -10000

// Initialize Adafruit_LIS3DH library.
// Return value: OneWire handle opaque pointer.
Adafruit_LIS3DH *mgos_bme280_create();

// Close Adafruit_LIS3DH handle. Return value: none.
void mgos_lis3dh_close(Adafruit_LIS3DH *lis);

// Initialize the sensor with given parameters/settings.
// Returns 0 if the sensor not plugged or a checking failed,
// i.e. the chip ID is incorrect.
// Returns 1 otherwise.
bool mgos_lis3dh_begin(Adafruit_LIS3DH *lis, int i2caddr);

// Read x y z at once
void mgos_lis3dh_read(Adafruit_LIS3DH *lis);

// Read the auxilary ADC
int mgos_lis3dh_readADC(Adafruit_LIS3DH *lis, int adc);

// Set INT to output for single or double click
void mgos_lis3dh_setClick(Adafruit_LIS3DH *lis, int c, int clickthresh, int timelimit, int timelatency, int timewindow);
int mgos_lis3dh_getClick(Adafruit_LIS3DH *lis);

// Sets the g range for the accelerometer
void mgos_lis3dh_setRange(Adafruit_LIS3DH *lis, int range);

// Gets the g range for the accelerometer
int mgos_lis3dh_getRange(Adafruit_LIS3DH *lis);

// Sets the data rate for the LIS3DH (controls power consumption)
void mgos_lis3dh_setDataRate(Adafruit_LIS3DH *lis, int dataRate);

// Gets the data rate for the LIS3DH (controls power consumption)
int mgos_lis3dh_getDataRate(Adafruit_LIS3DH *lis);

#ifdef __cplusplus
}
#endif  /* __cplusplus */