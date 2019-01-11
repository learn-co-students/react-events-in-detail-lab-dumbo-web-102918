// Code CoordinatesButton Component Here
import React from 'react';
import onReceiveCoordinates from '../index'

class CoordinatesButton extends React.Component {


  render(){
    return(
      <button
        onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>
        Click
      </button>
    )
  }
}
export default CoordinatesButton;
