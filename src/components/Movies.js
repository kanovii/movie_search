import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Movies = ({id, title, img}) => {

    return(
        <div>
            <Link to={`/Detail/${id}`}>
                <img src={img}/>
            </Link>
            
            <div>{title}</div>
        </div>
        
    )
}

Movies.prototype ={
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Movies;