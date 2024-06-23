import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

function PizzaCard({ pizza }) {
  const { agregarCarrito } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate(`/${pizza.id}`);
  };

  return (
    <div className="col-md-3 mb-4" key={pizza.id}>
      <div className="card h-100">
        <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "200px" }}>
          <img className="card-img-top" style={{ width: "auto", maxHeight: "100%" }} src={pizza.img} alt={pizza.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{pizza.name}</h5>
          <p><strong>Ingredientes:</strong></p>
          <ul> 
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5 className="text-center text-success">${pizza.price.toLocaleString()}</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-info" onClick={handleVerMas}>Ver Más 👀</button>
            <button className="btn btn-danger" onClick={() => agregarCarrito(pizza)}>Añadir <span role="img" aria-label="cart">🛒</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
