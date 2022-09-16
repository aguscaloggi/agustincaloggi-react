import React from "react";
import ItemList from './ItemList';
import items from '../items';
import {useState, useEffect } from 'react';

const ItemListContainer = () => {
    let [item, setItem] = useState([]);
    useEffect(()=> {
        const task = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(items);
            },2000)
        });
        task.then((res)=>{
            setItem(res)
        });
    },[]);
    return (
        <div className="itemlist__container">
            <div><ItemList props={items} /> </div>
        </div>
    )
}

export default ItemListContainer;