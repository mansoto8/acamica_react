
// Example 1

/*var app = React.createElement('input', {
  onClick: function(ev) {
    console.log('Hice click!');
  },
  value: 'Guardar'
});
*/
//Example 2

/*class BotonGuardar extends React.Component {
  render() {
    return React.createElement('button', {
      type: 'button',
      onClick: function(ev) {
        if (this.props.habilitado) {
          this.props.onClick(ev);
        }
      }.bind(this)
    }, 'Guardar');
  }
}

var app = React.createElement(BotonGuardar, 
    {
      habilitado:true,
      onClick: function(ev){
        console.log('Guardo!');
      }
    });
*/
//Example 3
class Elemento extends React.Component {
  render() {
    return React.createElement('div', null,
      this.props.elemento
    );
  }
}

class Lista extends React.Component {
  render() {
    var elementos = this.props.elementos.map(function(elemento) {
      return React.createElement(Elemento, { elemento: elemento });
    });

    if (elementos.length === 0) {
      elementos = this.props.renderSinResultados()
    }
    return React.createElement('div', null,
      elementos
    );
  }
}

var app = React.createElement(Lista, {
  elementos: ['</br>',2,3],
  renderSinResultados: function () {
    return React.createElement(
      'p', 
      null, 
      'No hay resultados'
    );
  }
});

ReactDOM.render(app, document.getElementById('root'));


