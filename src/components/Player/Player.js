import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faDollarSign, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
const Player = (props) => {
    console.log(props);
    const [isClick, setIsClick] = useState(false);
    const {name,img,age,role,wranking,team,yIncome} = props.player;
    return (
        <div className="col-lg-4 col-md-4">
            <div className="card">
                <img src={img} alt=""/>
            
                <div className="card-body">
                    <h4 className="card-title">{name}<span>age: {age}</span> </h4>
                    <p className="text-primary">{role} <span>world ranking: {wranking}</span></p>
                    <p className="text-primary">Country: {team}</p>
                    <p className="text-primary">
                        <FontAwesomeIcon icon={faDollarSign} />
                        {yIncome} m / year
                    </p>
                    <Button
                        disabled={isClick} 
                        onClick={() =>{
                            // addToCartHandler()
                            setIsClick(true);
                        }}
                        className="btn btn-warning">
                            {
                            isClick?(
                                <>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                        Already Hired
                                </>
                            ):(
                                <>
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                        Hire Player
                                </>
                            )}
                            
                            Hire Player
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default Player;