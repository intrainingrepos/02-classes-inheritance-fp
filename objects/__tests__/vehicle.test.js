'use strict';

// const Vehicle = require('../vehicle-constructor.js');
// const Vehicle = require('../vehicle-class.js');
const Vehicle = require('../vehicle-factory.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });
  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });
  });

  describe('Airplane', () => {

    let airplane = new Vehicle.Airplane('foo');

    it('has 3 wheels', () => {
      expect(airplane.wheels).toEqual(3);
    });

    it('has engines', () => {
      expect(airplane.engines()).toBeTruthy();
    });

    it('has wings', () => {
      expect(airplane.wings).toBeTruthy();
    });
  });

  describe('Helicopter', () => {

    let helicopter = new Vehicle.Helicopter('foo');

    it('has 0 wheels', () => {
      expect(helicopter.wheels).toEqual(0);
    });

    it('has engines', () => {
      expect(helicopter.engines()).toBeTruthy();
    });

    it('has wings', () => {
      expect(helicopter.wings).toBeUndefined();
    });

    it('has blades', () => {
      expect(helicopter.blades).toBeTruthy();
    });
  });

  describe('Fish', () => {

    let fish = new Vehicle.Fish('foo');

    it('lives in fresh water', () => {
      expect(fish.watertype).toEqual('fresh');
    });

    it('has fins', () => {
      expect(fish.fins).toBeTruthy();
    });

    it('lives under the sea', () => {
      expect(fish.habitat).toBeTruthy();
    });
  });

  describe('Lobster', () => {

    let lobster = new Vehicle.Lobster('foo');

    it('lives in salt water', () => {
      expect(lobster.watertype).toEqual('salt');
    });

    it('has fins', () => {
      expect(lobster.fins).toBeUndefined();
    });

    it('lives under the sea', () => {
      expect(lobster.habitat).toBeTruthy();
    });
  });

});