import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import PizzaCard from '../components/PizzaCard';

function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="container mt-4">
      <header className="bg-dark text-white text-center py-5">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </header>
      <div className="row">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;
