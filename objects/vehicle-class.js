'use strict';


class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }
}

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }
  wheelie(){
    return 'Wheeee!';
  }
}

class FlyingVehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  engines(){
    return 'Let us take to the sky!';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super(name, 3);
  }
  wings(){
    return 'Look it is a plane!';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super(name, 0);
  }
  blades(){
    return 'Watch your head!';
  }
}

class SeaCreature {
  constructor(name, watertype) {
    this.name = name;
    this.watertype = watertype;
  }
  habitat(){
    return 'We are whale watching!';
  }
}

class Fish extends SeaCreature {
  constructor(name){
    super(name, 'fresh');
  }
  fins(){
    return 'Salmon cookies?';
  }
}

class Lobster extends SeaCreature {
  constructor(name){
    super(name, 'salt');
  }
  claws(){
    return 'Yummm Red Lobster!';
  }
}

module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};