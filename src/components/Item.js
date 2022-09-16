import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = (props) => {
    return (
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <img className="card__img" src={props.img}></img>
            <p className="card__description">{props.description}</p>
            <p className="card__price">{props.price}</p>
            <div> <ItemDetailContainer/></div>
        </div>
    );
};

export default Item;