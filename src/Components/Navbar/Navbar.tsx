import React from 'react';
import './Navbar.css';
import user from '../../Assets/Icons/user.svg';
import bag from '../../Assets/Icons/shoppingBag.svg';
import search from '../../Assets/Icons/search.svg';

const Navbar: React.FC = () => {
    return (
        <div className='col-12 justify-content-between d-flex flex-row nav-container'>
            <div className="navbar-brand">3legant.</div>
            <div className='nav-menu-container'>
                <div className="nav-menu-item selected">Home</div>
                <div className="nav-menu-item">Shop</div>
                <div className="nav-menu-item">Product</div>
                <div className="nav-menu-item">Contact Us</div>
            </div>
            <div className='d-flex flex-row icons-container'>
                <div className="search-and-user">
                    <img src={search} alt="search" />
                    <img src={user} alt="user" />
                </div>
                <div className="bag-container d-flex flex-row">
                    <img src={bag} alt="bag" />
                    <span className="count">1</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar