/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Trip    = require('../../app/models/person'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'trip-test';

describe('Trip', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Person object', function(){
      var t = new Trip();
      expect(t).to.be.instanceof(Trip);
    });
  });

  describe('.all', function(){
    it('should get all trips', function(done){
      Trip.all(function(err, trips){
        expect(trips).to.have.length(2);
        done();
      });
    });
  });
});

