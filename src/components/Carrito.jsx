import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

export default function Carrito() {
  const { carrito, agregarCarrito, quitarCarrito } = useContext(PizzaContext);

  return (
    <div className='carrito'>
      <h2 className='text-center mt-4 mb-4'>Detalles del Pedido</h2>
      <div className='container'>
        <ul className='list-group'>
          {carrito.map((item, index) => (
            <li key={index} className='list-group-item'>
              <div className='row align-items-center'>
                <div className='col-md-3'>
                  <img src={item.img} alt='' className='img-fluid' />
                </div>
                <div className='col-md-6'>
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price}</p>
                </div>
                <div className='col-md-3'>
                  <div className='input-group'>
                    <button
                      className='btn btn-outline-secondary'
                      onClick={() => quitarCarrito(item)}
                    >
                      -
                    </button>
                    <span className='input-group-text'>{item.count}</span>
                    <button
                      className='btn btn-outline-secondary'
                      onClick={() => agregarCarrito(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
