import React from 'react'
import "../CSS/Product.css"
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, price, image }) => {
    const [{ basket }, dispatch] = useStateValue();
    console.log("my basket", basket);
    const addtoBasket = () => {
        //dispatch the item to the data layer
        dispatch({
            type: 'ADD_ITEM',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
            },
        });
    };
    return (
        <div className='product'>

            <div className="product_info">
                <p className='title'>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} />
            <button onClick={addtoBasket} className='btn'>Add to Cart </button>

        </div>
    )
}

export default Product