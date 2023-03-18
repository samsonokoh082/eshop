import React from 'react'
import './header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Router>
        <Link to= "/" style={{textDecoration: 'none'}}>
          <div className="header_logo">
            <StorefrontIcon className='header__logoImage' fontSize='large' />
            <h2 className='header__logoTitle'> SAMMIE</h2>

          </div>
        </Link>
      </Router>




      <div className="header_search">
        <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />

      </div>

      <div className="header_nav">

        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In my name</span>


        </div>
        <div className="nav_item">

          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>

        </div>
        <Router>
          <Link to="/checkout" style={{ textDecoration: "none" }}>

            <div className="nav_itemBasket">
              <ShoppingBasketIcon />


              <span className="nav_itemLineTwo nav__basketCount">0</span>

            </div>
          </Link>
        </Router>
      </div>

    </div>

  )
}

export default Header