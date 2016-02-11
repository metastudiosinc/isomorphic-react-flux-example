var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

// var AppDispatcher = assign({}, Dispatcher.prototype,{
//
//   handleViewAction: function(action) {
//     this.dispatch({
//       source: 'VIEW_ACTION',
//       action: action
//     });
//   }
//
// })
//
//
//
//
// module.exports =  AppDispatcher;
