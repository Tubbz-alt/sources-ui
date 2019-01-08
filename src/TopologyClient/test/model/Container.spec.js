/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TopologicalInventory);
  }
}(this, function(expect, TopologicalInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TopologicalInventory.Container();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Container', function() {
    it('should create an instance of Container', function() {
      // uncomment below and update the code to test Container
      //var instane = new TopologicalInventory.Container();
      //expect(instance).to.be.a(TopologicalInventory.Container);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TopologicalInventory.Container();
      //expect(instance).to.be();
    });

    it('should have the property cpuLimit (base name: "cpu_limit")', function() {
      // uncomment below and update the code to test the property cpuLimit
      //var instane = new TopologicalInventory.Container();
      //expect(instance).to.be();
    });

    it('should have the property cpuRequest (base name: "cpu_request")', function() {
      // uncomment below and update the code to test the property cpuRequest
      //var instane = new TopologicalInventory.Container();
      //expect(instance).to.be();
    });

    it('should have the property memoryLimit (base name: "memory_limit")', function() {
      // uncomment below and update the code to test the property memoryLimit
      //var instane = new TopologicalInventory.Container();
      //expect(instance).to.be();
    });

    it('should have the property memoryRequest (base name: "memory_request")', function() {
      // uncomment below and update the code to test the property memoryRequest
      //var instane = new TopologicalInventory.Container();
      //expect(instance).to.be();
    });

  });

}));
