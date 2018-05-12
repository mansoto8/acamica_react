class Contador extends React.Component {
    render() {
      return React.createElement('div', null,
        React.createElement('p', null, 'La cuenta actual es ', this.props.cuenta),
        React.createElement('input', {
          type: 'button',
          value: 'Incrementar',
          onClick: this.props.onIncrementar
        }),
        React.createElement('input', {
          type: 'button',
          value: 'Decrementar',
          onClick: this.props.onDecrementar
        })                         
      );
    }
  }


var node = document.getElementById('root');

function render(cuenta) {
    ReactDOM.render(
      React.createElement(Contador, {
        cuenta: cuenta,
        onIncrementar: function() {
          render(cuenta + 1);
        },
        onDecrementar: function() {
          render(cuenta - 1);
        }
      }), 
      node
    );
  }

render(0);

/**
 * Otra alternativa:
 * 
 * Ambas validas
var cuenta = 0;

function render() {
  ReactDOM.render(
    React.createElement(Contador, {
      cuenta: cuenta,
      onIncrementar: function() {
        cuenta += 1;
        render();
      },
      onDecrementar: function() {
        cuenta -= 1;
        render();
      }
	}), 
    node
  );
}
 * 
 */