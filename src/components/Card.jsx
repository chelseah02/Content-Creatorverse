import './Card.css'
// import { useState } from 'react';
import { Link } from 'react-router-dom'

const Card = (props) =>  {
    console.log(props.id);
    console.log(props.created);
    return (
        <div className="Card">
            <img className="imageURL" src={props.imageURL} alt="Creator Image"></img>
            <h2 className="name">{props.name}</h2>
            <h4 className="description">{props.description}</h4>
            <Link to={props.url} className='url' target="_blank"> Check out their page </Link>
            <br />
            <br />
            <Link to={'edit/'+ props.id} className='more-info'>See or Edit Creator Info</Link>
        </div>
    );  
  };
  
  export default Card;