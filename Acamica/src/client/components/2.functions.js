import React from 'react';
import { render } from 'react-dom';

/*
  For deploying this via functions:
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

function Encabezado(props) {
  return React.createElement(
    'h1', 
    null, 
    'Mi Sitio - ' + props.nombrePagina
  );
}

function Menu() {
  return React.createElement('ul', { className: 'menu' },
    React.createElement('li', null, 'Inicio'),
    React.createElement('li', null, 'Quienes Somos'),
    React.createElement('li', null, 'FAQ'),
  )
}

function Contenido(props) {
  return React.createElement(
    'div', 
    {className: 'contenido'}, 
    props.children
  );
}


var app = React.createElement('div', null,
  Encabezado({ nombrePagina: 'Pagina 1' }),
  Menu(),
  Contenido({ 
    children: React.createElement('p', null, 'Mi contenido') 
  })
);

render(app, document.getElementById('root'));


