import React from 'react';
import { render } from 'react-dom';

var app = React.createElement('h1',null,'Hola mundo!');
var app2 = React.createElement('br');
var app3 = React.createElement('img', { src: 'foo.png' });
var app4 = React.createElement('p', { className: 'parrafo' }, 
    "Esto es un texto que está en una etiqueta 'p' con clase 'parrafo' ");
var app5 = React.createElement('h1', { style: { color: 'red' } }, 'Hello world');
var app6 = React.createElement('a', {
    href: 'http://google.com',
    style: { backgroundColor: 'red' }
  }, 'Link a Google');

var app7 = React.createElement('div', null,
  React.createElement('h1', null, 'Hello world'),
  React.createElement('p', null,
    'Esto es un texto ',
    React.createElement('a', { href: 'http://google.com' }, 'y un link')
  )
);

var personas = ['Juan', 'Maria', 'Laura', 'German'];
var app8 = React.createElement('ul', null,
  personas.map(function(persona) {
    return React.createElement('li', null, persona);
  })
);

var app9 = React.createElement('h1', { children: 'Este es un texto' });

var app10 = React.createElement('h1', null, 'Hola Mundo')
// {
//   type: 'h1',
//   props: {
//	   children: 'Hola Mundo'
//   }
// }

var app11 = React.createElement('div',null,app,app2,app3,app4,app5,app6,app7,app8,app9,app10)

render(app11, document.getElementById('root'));

/* 
Salida en HTML:
 <div id="content">  
    <h1>Hola mundo!</h1>
 </div>
*/

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
);