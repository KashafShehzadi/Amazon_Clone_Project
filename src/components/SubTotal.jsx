import React from 'react'
import "../CSS/SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'


const SubTotal = () => {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ( {basket.length} items):<strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' />This Order contains a gift.
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => navigate("/payment")} > proceed to checkout </button>
        </div>
    )
}

export default SubTotal