import React from 'react'
import "../CSS/CheckOutProduct.css"
import { useStateValue } from '../StateProvider.jsx'

const CheckOutProduct = ({ id, image, title, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeProduct = () => {
        console.log("Dispatching REMOVE_ITEM action for id: ", id);
        dispatch({
            type: 'REMOVE_ITEM',
            id: id,
        });
    };

    return (
        <div className='checkProduct'>
            <img className="checkoutProduct__image" src={image} />
            <div className="checkInfo">
                <p className='title'>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeProduct} className='btn'>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckOutProduct