import React from "react";

function Card(props) {
    return(
        <div className="ll">
            <div className="sold">Sold Out</div>
        <img src={props.img} alt="hrrll" className="img8"/>
        <div className="star">⭐5.0<span className="USA">(6).USA</span></div>
        <p className="Life">{props.life}</p>
        <span className="from"> <div className="bold">from $136</div>/person</span>
        </div>
    )
}

export default Card