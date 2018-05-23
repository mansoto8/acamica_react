import React, { Component } from 'react';
import Temperatura from './14Updating.jsx';
import Formulario from './16FormElements.jsx';


class App extends Component {
  
  constructor(props) {
    super();
    this.state = { ciudad: 'Bogota' };
  }

  render() {
    //return <h1>Hello World</h1>;
    return <div>
            <Temperatura ciudad={this.state.ciudad}></Temperatura>
            <br/>
            <button onClick={this.cambiarCiudad.bind(this)}>Actualizar</button>
            <br/>
            <Formulario texto={'text'} aceptado={true}></Formulario>
            </div>
  }

  cambiarCiudad(){
    console.log("seteando ciudad")
      
    if(this.state.ciudad==='Bogota'){
      this.setState({
        ciudad:'Medellin'
      })
    }else{
      this.setState({
        ciudad:'Bogota'
      })
    }
      
  }
}
  


export default App;