import React from 'react';
import "../CSS/CheckOut.css"
import SubTotal from '../components/SubTotal';

const CheckOut = () => {
    return (
        <>
            <div className="checkout">
                <div className="check_left">
                    <img src="/public/front.jpg" alt="" />
                    <div>
                        <h2 className="check_title">Your Shoping Cart Items</h2>
                        {/*items*/}
                    </div>
                </div>
                <div className="check_right">
                    <SubTotal />
                </div>

            </div>
        </>
    )
}

export default CheckOut