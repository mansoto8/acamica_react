import React from 'react';
import { render } from 'react-dom';

/*
  For deploying this via Clases extends React.component:
var app = React.createElement('div', null,
  React.createElement('h1', null, 'Mi Sitio - Pagina 1'),
  React.createElement('ul', { className: 'menu' },
    React.createElement('li', null, 'Inicio'),
    React.createElement('li', null, 'Quienes Somos'),
    React.createElement('li', null, 'FAQ'),
  ),
  React.createElement('div', { className: 'contenido' },
    React.createElement('p', null, 'Mi contenido')
  )                   
);*/
 
  
  class Encabezado extends React.Component {
    render() {
      return React.createElement(
        'h1', 
        null, 
        'Mi Sitio mod - ' + this.props.nombrePagina
      );
    }
  }
  
  class Menu extends React.Component {
    render() {
      return React.createElement(
        'ul', 
        {className: 'menu'},
        React.createElement('li', null, 'Inicio'),
        React.createElement('li', null, 'Quienes Somos'),
        React.createElement('li', null, 'FAQ'),
      );
    }
  }
  
  class Contenido extends React.Component {
    render() {
      return React.createElement(
        'div', 
        {className: 'contenido'},
        this.props.children
      );
    }
  } 
  
  var app = React.createElement('div', null,
    React.createElement(Encabezado, { nombrePagina: 'Pagina 2'}),
    React.createElement(Menu),
    React.createElement(Contenido, null,
      React.createElement('p', null, 'Mi contenidovmod')
    )
  );
  
  
  render(app, document.getElementById('root'));
  
  
  