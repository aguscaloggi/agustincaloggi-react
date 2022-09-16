import React from "react"
import {useState} from 'react';
import '../app/styles.css';
import ItemList from './ItemList';


const ItemDetail = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div show={show}>
            <div className="item__container">
                <h1 className="item__title">{item.title}</h1>
                <img></img>
                <p className="item__description"></p>
                <ItemList />
            </div>
        </div>
    )
}

export default ItemDetail;