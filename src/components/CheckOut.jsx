import React from 'react';
import "../CSS/CheckOut.css"
import SubTotal from '../components/SubTotal';
import CheckOutProduct from '../components/CheckOutProduct.jsx';
import { useStateValue } from '../StateProvider.jsx';

import addImage from "../assets/front.jpg"

const CheckOut = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>
            <div className="checkout">
                <div className="check_left">
                    <img className="add_image" src={addImage} alt="" />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="check_title">{(basket.length == 0) ? "Your Cart is empty" : "Your Shopping Cart Items"}</h2>
                        {/*items*/}
                        {basket.map(item => (

                            <CheckOutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />

                        ))}
                    </div>
                </div>
                {
                    basket.length != 0 ? (<div className="check_right">
                        <SubTotal />
                    </div>) : ""
                }


            </div>
        </>
    )
}

export default CheckOut