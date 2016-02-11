var React                   = require('react');
var Header                  = require('./Header.react');

var Application = React.createClass({
    getInitialState: function () {
    return {
      showSubComponent: true,
      duration: 500
    };
  },

  render: function () {
    return (
      <div className="container-fluid">
        <Header text="Hello, React" />

      </div>
    );
  }
});

module.exports = Application;
