var AppDispatcher = require('../dispatcher/AppDispatcher');
var exampleConstants = require('../constants/exampleConstants');


var ActionTypes = exampleConstants.ActionTypes;

var exampleActions = {

  toggleBoxColor: function(data) {
    console.log("toggleBoxColor in actions");

    AppDispatcher.dispatch({
      type: ActionTypes.BOX_COLOR,
      data: data
    })
  }



};

module.exports = exampleActions;
