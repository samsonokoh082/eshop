import React from 'react'
import './header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
  
      <div className="header_logo">
        <StorefrontIcon className='header__logoImage' fontSize='large'/>
        <h2 className='header__logoTitle'> SAMMIE</h2>

      </div>

      <div className="header_search">
        <input type="text" className='header__searchInput' />
        <SearchIcon className='header__searchIcon'/>

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
        <div className="nav_itemBasket">
        <ShoppingBasketIcon/>
         
          <span className="nav_itemLineTwo nav__basketCount">0</span>

        </div>
      </div>

    </div> 
   
  )
}

export default Header