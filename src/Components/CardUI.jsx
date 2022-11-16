import React from "react";
import "./Cards.css"

const Card = props=>{
    return(
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Fashion' />
            </div>
        
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae soluta obcaecati vitae incidunt vero animi repellendus doloremque consectetur doloribus ex.
                </p>
                <a href='/cart' className='btn btn-outline-success'>Add To Cart</a>
                <a href='/cart' className='btn btn-outline-success'>Buy Now</a>
            </div>
        </div>
        
    );
}

export default Card;