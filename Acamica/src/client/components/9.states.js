class Toggle extends React.Component {
    constructor(props) {
      super();
      this.state = { activo: true };
    }
    handleClick(ev) {
      this.setState({ 
        activo: !this.state.activo 
      });
    }
    render() {
      return React.createElement('div', {
        onClick: this.handleClick.bind(this)
      },
        'Activo: ',
        this.state.activo ? 'Si' : 'No'
      );

      //Forma correcta de setear el estado
      this.setState(nuevoEstado, function() {
        // Aqui this.state ya esta actualizado
      });
      // Aqui this.state no necesariamente esta
      // actualizado
    }

    
  }

  var app = React.createElement(Toggle);
  ReactDOM.render(app, document.getElementById('root'));