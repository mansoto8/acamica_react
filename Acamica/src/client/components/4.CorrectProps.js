
import React from 'react';
import { render } from 'react-dom';

/*Wrong modification of props. Components must be immutables, cant change the 
  component structure inside the render
*/

class Boton extends React.Component {
  render() {
    if (!this.props.color) {
      this.props.color = 'blue';
    }
  }
}

/* Correct way of handling the color: */

class Boton extends React.Component {
  render() {
    var color = this.props.color;
    
    if (!color) { color = 'blue'; }
    
    return React.createElement('button', {
      style: { color: color }
    }, this.props.texto);
  }
}

