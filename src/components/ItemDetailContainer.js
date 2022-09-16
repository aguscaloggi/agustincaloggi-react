import React from "react";
import { useState, useEffect} from 'react';
import items from "../items";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        const getDetails = new Promise((resolve,reject)=>{
            setTimeout(()=> {
                resolve(items);
            },2000)
        });
        getDetails.then((res)=>{
            setDetails(res)
        });
    }, [] );
    return (
        <div>
            <ItemDetail props={details}/>
        </div>
    )
}

export default ItemDetailContainer;