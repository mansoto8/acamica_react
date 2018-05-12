<div ref={function (elemento) {
  // elemento es la instancia del 
  // div en el DOM, la podemos usar como
  // querramos.
}} />

//Ex 2
class BotonConAutoFoco extends Component {
  render() {
    return <button>
      {this.props.texto}
    </button>;
  }
}

class BotonConAutoFoco extends Component {
  render() {
    return <button
      ref={function(el) {
        //Es necesario chequear porque cuando se quita el elemento del DOM se vuelve a llamar la función refs
        if (el) {
          el.focus();
        }
      }}
    >
      {this.props.texto}
    </button>;
  }
}

//Ex 3
//Es normal guardarlo como una variable de instancia
<div ref={function (elemento) {
  if (elemento) {
    // Tengo el elemento, puedo usarlo aqui o
    //guardarlo en la instancia del componente
    this.div = elemento;
  } else {
    // Se desmonto el componente, puedo
    // limpiar la referencia en la instancia
    // del componente
    this.div = null;
  }
}.bind(this)} />

//Ex 4
/*<div ref={function (elemento) { 
  this.div = elemento; 
}.bind(this)} />

// luego en algun metodo de la clase:
//$(this.div).superPlugin();

//Ex 5 - Hacer ref a componente propio
//El reporte renderiza el gráfico
/*class Reporte extends React.Component {
  obtenerDatos() {
    // getDatos() es un metodo de Grafico
    var datos = this.grafico.getDatos();
    this.props.onProcesarDatos(datos);
  }
  render() {
    return <div>
      <Grafico ref={function (el) {
        this.grafico = el; 
      }.bind(this)} />
      <button 
    	onClick={this.obtenerDatos.bind(this)}
      >Procesar</button>
    </div>;
  }
}
  
class Grafico extends React.Component {
  //getDatos() { return ... }
}

*/