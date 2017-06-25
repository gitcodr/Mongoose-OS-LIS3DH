/*
 * Copyright (c) 2014-2017 Cesanta Software Limited
 * All rights reserved
 *
 * Arduino Adafruit_LIS3DH library API wrapper
 */

#include <math.h>
#include "mgos_arduino_lis3dh.h"

Adafruit_LIS3DH *mgos_lis3dh_create() {
  return new Adafruit_LIS3DH();
}

void mgos_lis3dh_close(Adafruit_LIS3DH *lis) {
  if (lis != nullptr) {
    delete lis;
    lis = nullptr;
  }
}

bool mgos_lis3dh_begin(Adafruit_LIS3DH *lis, int i2caddr) {
  if (lis == nullptr) return false;
  return lis->begin(i2caddr);
}

void mgos_lis3dh_read(Adafruit_LIS3DH *lis) {
  if (lis == nullptr) return;
  lis->read();
}

int mgos_lis3dh_readADC(Adafruit_LIS3DH *lis, int adc) {
  if (lis == nullptr) return MGOS_LIS3DH_RES_FAIL;
  return lis->readADC(adc);
}

void mgos_lis3dh_setClick(Adafruit_LIS3DH *lis, int c, int clickthresh, int timelimit, int timelatency, int timewindow)
  if (lis == nullptr) return;
  lis->setClick(c, clickthresh, timelimit, timelatency, timewindow);
}

int mgos_lis3dh_getClick(Adafruit_LIS3DH *lis) {
  if (lis == nullptr) return MGOS_LIS3DH_RES_FAIL;
  return lis->getClick();
}

void mgos_lis3dh_setRange(Adafruit_LIS3DH *lis, int range) {
  if (lis == nullptr) return;
  lis->setRange(range);
}

int mgos_lis3dh_getRange(Adafruit_LIS3DH *lis) {
  if (lis == nullptr) return MGOS_LIS3DH_RES_FAIL;
  return lis->getRange();
}

void mgos_lis3dh_setDataRate(Adafruit_LIS3DH *lis, int dataRate) {
  if (lis == nullptr) return;
  lis->setDataRate(dataRate);
}

int mgos_lis3dh_getDataRate(Adafruit_LIS3DH *lis) {
  if (lis == nullptr) return MGOS_LIS3DH_RES_FAIL;
  return lis->getDataRate();
}