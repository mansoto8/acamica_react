import React, { Component } from 'react';
/*class Comp extends React.Component {
    componentWillReceiveProps(nextProps) {
      // this.props todavia no cambiaron
      ...
    }    
  }
*/
export default class Temperatura extends React.Component {
    constructor(props) {
      super();
      this.state = {
        actualizando: false,
        temperatura: 0
      }
    }
    componentWillMount() {
      this.actualizarTemperatura(this.props.ciudad);
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.ciudad !== nextProps.ciudad) {
        this.actualizarTemperatura(nextProps.ciudad);
      }
    }
    actualizarTemperatura(ciudad) {
      this.setState({ actualizando: true });
      
      setTimeout(
        function(){
          this.obtenerTemperatura(ciudad, function(temperatura) {
            this.setState({ actualizando: false, temperatura: temperatura })
          }.bind(this))
        }.bind(this)        
        , 1000);
    }
    
    componentDidUpdate(prevProps, prevState) {
      // this.props y this.state 
      // ya cambiaron
      this.render();
    }

    render() {
      if (this.state.actualizando) {
        return <span>
          Actualizando temperatura para
          {this.props.ciudad}
        </span>;
      }
      return <span>
        {this.state.temperatura} grados en 
        {this.props.ciudad}
      </span>;
    }

    obtenerTemperatura(ciudad, calcularTemperatura){
      if(ciudad==='Bogota'){
        calcularTemperatura(5);
      }else{
        calcularTemperatura(100);
      }
    }
  }

  /*

class Comp extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // this.props y this.state todavia no cambiaron
    return true/false;
  }
}

  */
/*
 class DecimalesPi extends React.Component {

    shouldComponentUpdate(nextProps) {
        return this.props.decimales !== nextProps.decimales;
      }

    render() {
      return <span>
      {calcDecimalesPi(this.props.decimales)}
      </span>;
    }
  }
*/

/*
class Comp extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    // this.props y this.state 
    // todavia no cambiaron
    ...
  }
  componentDidUpdate(prevProps, prevState) {
    // this.props y this.state 
    // ya cambiaron
    ...
  }
}
*/

/*
class MapaGoogle extends React.Component {
    insertarMapa(el, opciones) { ... }
    actualizarMapa(el, opciones) {  ...  }
    quitarMapa(el) {  ...  }
    
    componentDidUpdate() {
      this.actualizarMapa(this.mapa, this.props.opciones);
    }
  
    componentDidMount() {
      this.insertarMapa(this.mapa, this.props.opciones);
    }
  
    componentWillUnmount() {
      this.quitarMapa(this.mapa);
    }
  
    render() {
      return <div ref={function(el) {
        this.mapa = el;
      }.bind(this)} />;
    }
  }
  */