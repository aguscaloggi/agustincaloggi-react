import React from "react";
import Item from "./Item";

const ItemList = ({props}) => {

    return (
        <div className="row">
            {props.map((item) => {
                return (
                    <Item 
                        key={Item.id}
                        title={Item.title}
                        img={Item.img}
                        description={Item.description}
                        price={Item.price}
                    />
                );
            })}
        </div>
    );
};

export default ItemList;
