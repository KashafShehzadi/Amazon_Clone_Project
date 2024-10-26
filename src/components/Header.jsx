import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from '@mui/icons-material/AddShoppingCart';
import "../CSS/Header.css"; // Import the stylesheet
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { getAuth, signOut } from "firebase/auth"; // Import necessary functions
import logo from '/src/assets/logo.png';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const auth = getAuth(); // Initialize auth using getAuth()

    const handleSignIn = () => {
        if (user) {
            signOut(auth) // Use signOut from Firebase v9
                .then(() => {
                    console.log("User signed out successfully");
                })
                .catch((error) => {
                    console.error("Error signing out: ", error);
                });
        }
    };

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo"
                    src={logo}
                    alt="Logo" />
            </Link>
            <div className="header__search">
                <input type="text" placeholder="Search Amazon" className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleSignIn} className="header__option">
                        <span className="upper">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="lower">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/order">
                    <div className="header__option">
                        <span className="upper">Returns</span>
                        <span className="lower">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="upper">Your</span>
                    <span className="lower">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className='header_optionBasket'>
                        <CartIcon />
                        <span className='lower count'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
