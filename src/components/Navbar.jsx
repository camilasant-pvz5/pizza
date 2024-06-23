import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

function Navbar() {
  const { carrito } = useContext(PizzaContext);

  const totalAmount = carrito.reduce((total, pizza) => total + (pizza.price * pizza.count), 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand text-white" to="/">
        <span role="img" aria-label="pizza">🍕</span> Pizzería Mamma Mia!
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/carrito">
            🛒: ${totalAmount.toLocaleString()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
