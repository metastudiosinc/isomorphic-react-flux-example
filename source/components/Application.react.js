var React = require('react');
var Header = require('./Header.react');
var Box = require('./Box.react');

var Application = React.createClass({

  //default API
  //getDefaultProps: function(){
  //    return null;
  //},
  //
  //
  //
  //getInitialState: function() {
  //
  //},
  //
  //componentWillMount: function(){
  //
  //},
  //
  //componentDidMount: function(){
  //
  //},
  //
  //componentWillReceiveProps: function(){
  //
  //},
  //
  //shouldComponentUpdate: function(){
  //
  //},
  //
  //componentWillUpdate: function(){
  //
  //},

  render: function() {
    return (
      <div className="container-fluid">
        <center>
          <Header text="Hello, React. Click the Box"/>
          <br/>
          <Box color="green"/>
        </center>
      </div>
    );

  }

  //,

  //componentDidUpdate: function(){
  //
  //},
  //
  //componentWillUnmount: function(){
  //
  //}

});

module.exports = Application;
