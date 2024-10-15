import React from 'react'
import "../CSS/SubTotal.css"
import CurrencyFormat from 'react-currency-format'


const SubTotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):<strong>0</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' />This Order contains a gift.
                        </small>
                    </>

                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>proceed to checkout</button>
        </div>
    )
}

export default SubTotal