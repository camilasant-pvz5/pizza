
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

export default function Detalle() {
  const { id } = useParams();
  /* PizzaContext es para acceder al estado de las pizzas */
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find((p) => p.id === id); 
  // sirve para buscar en el arreglo de pizzas según su id de c/u 

  if (!pizza) {  //si la pizza no existe, no se encuentra el id, va a salir el mensaje

  
    return <div>Pizza no encontrada</div>;
  }
/* acá se muestra la pizza encontrada: */
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4 className="text-success">${pizza.price.toLocaleString()}</h4>
        </div>
      </div>
    </div>
  );
}
