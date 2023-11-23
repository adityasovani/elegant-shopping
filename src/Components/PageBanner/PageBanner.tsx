import React from "react";
import '../Home/Home.css';
import './PageBanner.css';
import { ShopNow } from "../Banners/CategoryBanners";

const PageBanner: React.FC = () => {
    return (
        <div className="row  w-100 page-block-container" style={{ maxHeight: '30rem' }}>
            <div className="col-md-6" style={{ objectFit: 'contain', overflow: 'hidden' }}>
                <img style={{ maxWidth: '100%', maxHeight: '30rem', width: '100%' }} src={require('../../Assets/Images/page-banner.jpg')} alt="page-banner" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="w-75 gap-3 d-flex flex-column justify-content-center page-banner-txt-container">
                    <span className="discount-text">SALE UP TO 35% OFF</span>
                    <span className="page-banner-heading">HUNDREDS of New lower prices!</span>
                    <span className="page-banner-caption">It's more affordable than ever to give every room in your home a stylish makeover</span>
                    <ShopNow />
                </div>
            </div>
        </div>
    );
};

export default PageBanner;