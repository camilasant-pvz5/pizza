import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carrito() {
  const { carrito, eliminarDelCarrito } = useContext(PizzaContext);

  const totalAmount = carrito.reduce((total, pizza) => total + (pizza.price * pizza.count), 0);

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      <div className="row">
        {carrito.length > 0 ? (
          carrito.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <div className="card h-100">
                <div className="d-flex justify-content-center align-items-center p-3" style={{ height: "200px" }}>
                  <img className="card-img-top" style={{ width: "auto", maxHeight: "100%" }} src={pizza.img} alt={pizza.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{pizza.name}</h5>
                  <p className="text-center"><strong>Ingredientes:</strong></p>
                  <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <h5 className="text-success">${(pizza.price * pizza.count).toLocaleString()}</h5>
                    <p>Cantidad: {pizza.count}</p>
                    <button className="btn btn-danger" onClick={() => eliminarDelCarrito(pizza.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No hay pizzas en el carrito.</p>
          </div>
        )}
      </div>
      {carrito.length > 0 && (
        <div className="text-center mt-4">
          <h4>Total: ${totalAmount.toLocaleString()}</h4>
        </div>
      )}
    </div>
  );
}
