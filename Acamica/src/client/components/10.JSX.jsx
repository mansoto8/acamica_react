import React from 'react';

 //Ex 1
 var el = <h1>Hola mundo x</h1>;



//Ex 2
var el = <a href="https://google.com">
  Google
</a>;

var el = React.createElement('a', { 
    href: 'https://google.com' 
  }, 'Google');

//Ex 3
  var el = React.createElement('img', { 
    src: 'foto.png', 
    width: 200, 
    height: 200 
  });

  var el = <img 
  src="foto.png" width={200} height={200} />;


//Ex 4

//Old way
var className = 'carousel';
var imagenes = [
  React.createElement('img', { key: 1, src: 'foto1.png '}),
  React.createElement('img', { key: 2, src: 'foto2.png '}),
  React.createElement('img', { key: 3, src: 'foto3.png '})
];
var el = React.createElement('div', {
  className: className 
}, imagenes);

//JSX
var className = 'carousel';
var imagenes = [
  <img key={1} src="foto1.png" />,
  <img key={2} src="foto2.png" />,
  <img key={3} src="foto3.png" />
];
var el = <div className={className}>
  {imagenes}
</div>;


//Ex 5
//En miniscula corresponde a componentes html
//<div /> //=> React.createElement('div')

//Custom components en mayúscula
var el = React.createElement(Modal, { 
  isOpen: true 
}, 'Contenido del modal!');

var el = <Modal isOpen={true}>
  Contenido del modal!
</Modal>;

//Booleanos con solo el nombre se asumen verdadero
var el = <Modal isOpen>
  Contenido del modal!
</Modal>;


//Como evaluar JSX
//Incluir babel
//No recomendado para producción
/*
<html>
<head>...</head>
<body>
  <div id="content"></div>
  <script src="https://fb.me/react-15.0.1.js"></script>
  <script src="https://fb.me/react-dom-15.0.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
*/
//ReactDOM.render(el, document.getElementById('content'));

export default class App extends React.Component {
  render() {
    return (
      el
    );
  }
}