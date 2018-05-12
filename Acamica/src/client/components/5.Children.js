/*Manejo de children y utilidades react*/

//The following generates a problem when the children is only one component
class Grilla extends React.Component {
  render() {
     return React.createElement('div', null,
       this.props.children.map(function(elemento) {
         return React.createElement('div', null, elemento);
       })
     );
  }
 }  

 //Use of React.children to avoid the mentioned problem
class Grilla extends React.Component {
  render() {
    return React.createElement('div', null,
      React.Children.map(this.props.children,function(elemento) {
        return React.createElement('div', null, elemento);
      })
    );
  }
}

//Other react utilities with arrays:
React.Children.forEach(children, fn);

React.Children.count(children);



