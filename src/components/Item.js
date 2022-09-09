import React from "react";

const Item = (props) => {
    return (
            <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <img className="card__img" src={props.img}></img>
            <p className="card__description">{props.description}</p>
            <p className="card__price">{props.price}</p>
        </div>
    );
};

export default Item;