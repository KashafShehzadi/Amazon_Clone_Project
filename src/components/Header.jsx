import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/AddShoppingCart';
import "../CSS/Header.css"; // Import the stylesheet
import { Link } from "react-router-dom"
import { useStateValue } from '../StateProvider';


const Header = () => {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <>
            <div className="header">
                <Link to="/">
                    <img className="header__logo" src="/public/logo.png" />
                </Link>
                <div className="header__search">
                    <input type="text" placeholder="Search Amazon" className='header_searchInput' />
                    <SearchIcon className='header_searchIcon' />
                </div>
                <div className="header_nav">
                    <div class="header__option">
                        <span class="upper">Hello,Sign in</span>
                        <span class="lower">Accounts and List</span>
                    </div>
                    <div className="header__option">
                        <span class="upper">Returns</span>
                        <span class="lower">& Orders</span>
                    </div>
                    <div className="header__option">
                        <span class="upper">Your</span>
                        <span class="lower">Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className='header_optionBasket'>
                            <CartIcon />
                            <span className='lower count'>{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default Header  