'use strict';

function Trip(t){
  this.name     = t.name;
  this.photos   = [];
  this.beginLat = parseFloat(t.beginLat);
  this.beginLng = parseFloat(t.beginLng);
  this.endLat   = parseFloat(t.endLat);
  this.endLng   = parseFloat(t.endLng);
  this.from     = new Date(t.from);
  this.to       = new Date(t.to);
  this.mpg      = t.mpg;
  this.gasCost  = parseFloat(t.gasCost);
}

Object.defineProperty(Trip, 'collection', {
  get: function(){return global.mongodb.collection('people');}
});

Trip.all = function(cb){
  Trip.collection.find().toArray(cb);
};
Trip.create = function(obj, cb){
  var t = new Trip(obj);
  Trip.collection.save(t, cb);
};

module.exports = Trip;

