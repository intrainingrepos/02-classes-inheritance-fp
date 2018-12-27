'use strict';

const Vehicle = () => ({
  drive() {
    return 'Moving Forward';
  },
  stop(){
    return 'Stopping';
  },
});

function Car(name) {
  let car = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 4},
  );
  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 2},
    {wheelie}
  );
  function wheelie(){
    return 'Wheeee!';
  }
  return motorcycle;
}

const FlyingVehicle = () => ({
  engines() {
    return 'Let us take to the sky!';
  },
});

function Airplane(name) {
  let airplane = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 3},
    {wings}
  );
  function wings(){
    return 'Look it is a plane!';
  }
  return airplane;
}

function Helicopter(name) {
  let helicopter = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 0},
    {blades}
  );
  function blades(){
    return 'Watch your head!';
  }
  return helicopter;
}

const SeaCreature = () => ({
  habitat() {
    return 'We are whale watching!';
  },
});

function Fish(name) {
  let fish = Object.assign(
    {},
    SeaCreature(),
    {name},
    {watertype: 'fresh'},
    {fins}
  );
  function fins(){
    return 'Salmon cookies?';
  }
  return fish;
}

function Lobster(name) {
  let lobster = Object.assign(
    {},
    SeaCreature(),
    {name},
    {watertype: 'salt'},
    {claws}
  );
  function claws(){
    return 'Yummm Red Lobster!';
  }
  return lobster;
}


module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};