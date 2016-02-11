var AppDispatcher = require('../dispatcher/AppDispatcher');
var exampleConstants = require('../constants/exampleConstants');
var EventEmitter = require('events').EventEmitter;
var React = require('react');
var assign = require('object-assign');

var ActionTypes = exampleConstants.ActionTypes;

// Internal object of fields
var  _boxColor;

function toggleBoxColor(data){
  console.log("toggleBoxColor in store");
  _boxColor = data.boxColor;
}

// Merge our store with Node's Event Emitter
var ExampleStore = assign({}, EventEmitter.prototype, {

  getBoxColor: function() {
    return _boxColor;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(action) {
  // var text;
  // Define what to do for certain actions
  console.log(action.data);
  switch(action.type) {

    case ActionTypes.BOX_COLOR:
      toggleBoxColor(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  ExampleStore.emitChange();

  return true;

});

module.exports = ExampleStore;
