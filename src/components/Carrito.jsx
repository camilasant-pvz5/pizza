import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

export default function Carrito() {
  const { pizzas, carrito, agregarCarrito, quitarCarrito, eliminarDelCarrito } = useContext(PizzaContext);
  /* const pizza = pizzas.find((p) => p.id === id);  */
  console.log (carrito);
  return (
    <div className='carrito' >
      
      <h2> detalles del pedido </h2>
      <div className='container'> 
        <div> 
          <ul>
           {carrito.map((item)=>{
            return (
              <li>
           <div> <img src={item.img} alt="" />
           {item.name}</div>
           <div> 
            {item.price}
            <button onClick={()=>{quitarCarrito(item)}}>-</button>
           {item.count}
            <button onClick={()=> {agregarCarrito(item)}}>+</button>
           </div>
              </li>
            )
           })} </ul> </div>
        <div></div>
      </div>
    </div>
  )
}

