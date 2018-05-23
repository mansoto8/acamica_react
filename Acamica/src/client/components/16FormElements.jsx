import React, { Component } from 'react';

//Non controlled forms
/*class Formulario extends React.Component {
    handleSubmit(ev) {
        ev.preventDefault();
        this.props.onSubmit({
          texto: this.texto.value,
          aceptado: this.checkbox.checked
        });
      }

    render() {
      return <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Texto" defaultValue="Hola" ref={function(el){
          this.texto = el; 
        }.bind(this)} />
        <br />
        <label>
          <input type="checkbox" ref={function(el) { 
            this.checkbox = el; 
          }.bind(this)}  />
           Acepto los terminos
        </label>
        <button type="submit">Guardar</button>
      </form>;
    }
  }
*/
  // COntrolled forms
//It is defined in every moment de value of the elements
/*
class Formulario extends React.Component {
    constructor(props) {
      super();
      // Recibimos el estado inicial por props
      this.state = { 
        texto: this.props.texto, 
        aceptado: this.props.aceptado 
      };
    }
    handleSubmit(ev) {
      ev.preventDefault();
      this.props.onSubmit({
        texto: this.state.texto,
        aceptado: this.state.aceptado
      });
    }
    handleTexto(ev) {
      this.setState({ texto: ev.target.value });
    }
    handleCheckbox(ev) {
      this.setState({ 
        aceptado: ev.target.checked 
      });
    }
    render() {
      return <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Texto"
          value={this.state.texto}
          onChange={this.handleTexto.bind(this)}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.aceptado}
            onChange={this.handleCheckbox.bind(this)}
          />
           Acepto los terminos
        </label>
        <button type="submit">Guardar</button>
      </form>;
    }
  }
*/
  //Formulario controlado

  export default class Formulario extends React.Component {
    constructor(/*props*/) {
      super();
      this.state = { 
        //texto: this.props.texto, 
        //aceptado: this.props.aceptado 
        texto: 'Texto cons',
        aceptado: true
      };
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        texto: nextProps.texto,
        aceptado: nextProps.aceptado
      });
    }
    handleSubmit(ev) {
      ev.preventDefault();
      this.props.onSubmit({
        texto: this.state.texto,
        aceptado: this.state.aceptado
      });
    }
    handleTexto(ev) {
      this.setState({ texto: ev.target.value });
    }
    handleCheckbox(ev) {
      this.setState({ 
        aceptado: ev.target.checked 
      });
    }
    render() {
      return <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Texto"
          value={this.state.texto}
          onChange={this.handleTexto.bind(this)}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.aceptado}
            onChange={this.handleCheckbox.bind(this)}
          />
           Acepto los terminos
        </label>
        <button type="submit">Guardar</button>
      </form>;
    }
  }