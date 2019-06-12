import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Iframe extends Component {

   componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener('load', this.props.onLoad);
   }

   render() {
      return (
         <iframe title="iframe" ref="iframe" {...this.props}/>
      );
   }

}

export default Iframe;
