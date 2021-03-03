import React, { useState } from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faDollarSign, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
const Player = (props) => {
    console.log(props);
    const [isClick, setIsClick] = useState(false);
    const {name,img,age,role,wranking,team,yIncome} = props.player;
    return (
        <div className="col-lg-4 col-md-4">
            <div className="card customcard">
                <img src={img} alt=""/>
            
                <div className="card-body">
                    <h4 className="card-title">{name}<span className="age"> age: {age}</span> </h4>
                    <p className="commonStyling">{role} <span className="wranking">world ranking- {wranking}</span></p>
                    <p className="commonStyling ">Country: <span className="countryname">{team}</span></p>
                    <p className="commonStyling">
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span className="income">{yIncome}</span><span className="age">m/year</span> 
                    </p>
                    <Button
                        disabled={isClick} 
                        onClick={() =>{props.addToCartHandler(props.player)
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
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default Player;