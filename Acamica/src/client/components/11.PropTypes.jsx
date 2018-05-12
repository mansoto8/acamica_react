//Definir los tipos de props
//React realiza validación de tipos y lanza warning si es necesario
function Componente(props) {
    return // ...
  }
  
  Componente.propTypes = {
    foo: React.PropTypes.string.isRequired,
    bar: React.PropTypes.bool.isRequired
  };

//Tipos
React.PropTypes.array
React.PropTypes.bool
React.PropTypes.func
React.PropTypes.number
React.PropTypes.object
React.PropTypes.string
React.PropTypes.element
React.PropTypes.instanceOf(Usuario)
React.PropTypes.oneOf(['value 1', 'value 2']) //Como un enum
React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ])
React.PropTypes.arrayOf(
    React.PropTypes.number
  )
  React.PropTypes.objectOf(  //los valores de cada una de las propiedades de un objeto es del tipo
    React.PropTypes.number
  )

  //Objetos complejos
  React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  })

  React.PropTypes.any

//Custom validation
 /* function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }

  //Todos los propTypes:

  https://reactjs.org/docs/components-and-props.html
  */