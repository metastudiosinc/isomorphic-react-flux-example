var React = require('react');
var ReactDOM = require('react-dom');
var exampleStore = require("../stores/exampleStore")
var exampleActions = require("../actions/exampleActions")

function getAppState() {
  return {
          color:exampleStore.getBoxColor()
          };
}

var Box = React.createClass({

    _onChange: function() {
      this.setState(getAppState());
   },

   toggleColor: function() {

     var newColor;
     if (this.state.color === "black"){
       newColor = "blue"
     }else{
       newColor = "black"
     }
     //this.setState({ showPanel: panelSwitch });
     var data ={
       boxColor:newColor
     }
     exampleActions.toggleBoxColor(data)


   },

    //default API
    //getDefaultProps: function(){
    //    return null;
    //},
    //
    //
    //
    getInitialState: function() {
      console.log('Running Box getInitialState()');

      return getAppState();
    },
    //
    //componentWillMount: function(){
    //
    //},
    //
    componentDidMount: function() {
      console.log('Running Box componentDidMount()');
      exampleStore.addChangeListener(this._onChange)
      this.setState({
        color:this.props.color
      });

    },
    //
    // componentWillReceiveProps: function(nextProps){
    //   console.log('Running Box componentWillReceiveProps()');
    //
    //
    // },
    //
    //shouldComponentUpdate: function(){
    //
    //},
    //
    //componentWillUpdate: function(){
    //
    //},


    render: function(){
      return(

      <div style={{height:200,width:200,background:this.state.color}} onClick={this.toggleColor}>

      </div>

    );

    },

    //componentDidUpdate: function(){
    //
    //},
    //
    componentWillUnmount: function() {
      console.log('Running BOX componentWillUnmount()');
      exampleStore.removeChangeListener(this._onChange)

    }


});

module.exports = Box;
