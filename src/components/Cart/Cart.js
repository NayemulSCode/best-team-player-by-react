import React, {useState} from 'react';
import {Button} from 'react-bootstrap'
import './Cart.css'
<img src='' alt='' />;
const Cart = ({cart}) => {
    const total =  cart.reduce((salary, current) => salary + current.salary,0);
    const [cartbar, setCartbar] = useState(false);

    const changebg = () => {
        if (window.scrollY >= 350) {
        setCartbar(true);
        } else {
        setCartbar(false);
        }
    };

    window.addEventListener('scroll', changebg);
    return (
        <>
            <div className={cartbar ? 'cart bg-light p-2 active' : 'cart bg-light p-2 bg-light'}>
            <p className='text-center lead'>Players In Cart ({cart.length})</p>

                <ul className='list-group my-4'>
                    {cart.map(player => (
                        <li key={player.id} className='list-group-item'>
                            {player.name} <span className='rate'>T-rate</span> {player.salary}<span className='rate'>million</span>
                        </li>
                    ))}
                </ul>
                <div className='checkout-btn text-center'>
                    <Button className='btn btn-secondary w-100'>Total: {total} $ </Button>
                </div>
            </div>
        </>
    );
};

export default Cart;