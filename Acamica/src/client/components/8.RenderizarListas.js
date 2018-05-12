var itinerario = [
    { ciudad: 'Barcelona', dias: 3 },
    { ciudad: 'Madrid', dias: 5 },
    { ciudad: 'Paris', dias: 2 }
  ];

  React.createElement('ul', null,
  itinerario.map(function(item) {
    return React.createElement('li', null,
      'Ciudad ', item.ciudad, ', quedándonos ', item.dias, ' días'
    );
  })
);

//Si se añade un nuevo elemento se renderiza todo de nuevo

var itinerario = [
    { ciudad: 'Barcelona', dias: 3 },
    { ciudad: 'Madrid', dias: 5 },
    { ciudad: 'Barcelona', dias: 2 }, // <-
    { ciudad: 'Paris', dias: 2 }
  ];

//Para avisarle a react de correcta renderización utilizar key:

var itinerario = [
    { id: 1, ciudad: 'Barcelona', dias: 3 },
    { id: 2, ciudad: 'Madrid', dias: 5 },
    { id: 4, ciudad: 'Barcelona', dias: 2 },
    { id: 3, ciudad: 'Paris', dias: 2 }
  ];
  
  React.createElement('ul', null,
    itinerario.map(function(item) {
      return React.createElement('li', 
        { key: item.id },
        'Ciudad ', item.ciudad, ', quedándonos ', item.dias, ' días'
      );
    })
  );

  //Se puede excluir los numeros o strings que contienen una identidad propia