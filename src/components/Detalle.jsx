
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

export default function Detalle() {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

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
