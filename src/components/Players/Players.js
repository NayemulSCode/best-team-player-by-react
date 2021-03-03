import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import Player from '../Player/Player';
import './Players.css'
const Players = (props) => {
    const addToCartHandler = props.addToCartHandler;
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        setPlayers(data);
        console.log(data);
    },[])
    return (
        <div className="row g-4">
            {
                players.map(player => (
                    <Player 
                    player={player}
                    key={player.id} 
                    addToCartHandler={addToCartHandler}
                    />
                ))
            }
            
        </div>
    );
};

export default Players;