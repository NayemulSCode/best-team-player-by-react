//feature 1
import './App.css';
import Players from './components/Players/Players';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
function App() {
  const [cart, setCart] = useState([]);
  const addToCartHandler = (player) =>{
    console.log(player);
    const newCart = [...cart, player];
    setCart(newCart);
  }
  return (
    <>
      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Players addToCartHandler = {addToCartHandler}/>
            </div>
            <div className="col-lg-3">
              <Cart cart={cart} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
