import React, { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

export default function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);/* al estar vacio es porque quiero guardar mas de un elemento, en este caso: pizzas*/
  const [carrito, setCarrito] = useState([]); /* vacio igual el ([]) porque será más de uno */

  async function getPizzas() {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  }

  useEffect(() => {
    getPizzas(); 
  }, []); /* nos sirve para manejar el ciclo de vida de los componentes, recibe dos parametros 1 funcion flecha y despues de la coma un array de dependencia si esta vacio ejecuta todo lo que este dentro de las llaves una sola vez cuando se cree el componente */

  function agregarCarrito(pizza) { /* el indice de un elemento en un arreglo se hace con findeindex  */
    const producto = { ...pizza, count: 1 };
    const indicePizzas = carrito.findIndex((pedido) => pedido.id === pizza.id);
    if (indicePizzas >= 0) {
      carrito[indicePizzas].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  }

  function eliminarDelCarrito(id) {
    const newCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(newCarrito);
  }

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, carrito, setCarrito, agregarCarrito, eliminarDelCarrito }}> {/* va dentro todo lo que le vamos a pasar a nuestro children */}
      {children} {/* //va a ser todo lo que esté en medio del componente por eso hay que envolverlo */}
    </PizzaContext.Provider>
  );
}
