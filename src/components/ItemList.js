import React, { useState} from "react";
import Item from "./Item";

const ItemList = () => {
    const [ItemList, setItemList] = useState([
        {
            id: 0,
            title: "cero",
            img: "http://placekitten.com/200/300",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 1999,
        },
        {
            id: 1,
            title: "uno",
            img: "http://placekitten.com/200/300",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 2499,
        },
        {
            id: 2,
            title: "dos",
            img: "http://placekitten.com/200/300",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 4999,
        },
        {
            id: 3,
            title: "tres",
            img: "http://placekitten.com/200/300",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 3499,
        },
    ]);

    setTimeout(
        function() {
            this.setState({ position: 1 });
        }
        .bind(this),
        3000
    );

    return (
        <div className="row">
            {ItemList.map((Item) => {
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
