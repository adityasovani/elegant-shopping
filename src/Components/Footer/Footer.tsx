import React from 'react';
import './Footer.css';

// Icons
import fb from "../../Assets/Icons/Social/facebook.svg";
import insta from "../../Assets/Icons/Social/insta.svg";
import yt from "../../Assets/Icons/Social/youtube.svg";

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            {/* footer logo and slogan */}
            <div className="footer-links d-flex justify-content-between flex-row">
                <div className="footer-brand d-flex flex-row align-items-center">
                    <span className="footer-title">3legant</span>
                    <div className="footer-brand-separator mx-3"></div>
                    <span className='footer-brand-caption'>Gift & Decoration Store</span>
                </div>
                <div className="d-flex footer-menu">
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Products</span>
                    <span>Blog</span>
                    <span>Contact</span>
                </div>
            </div>
            {/* bottom bar */}
            <div className="bottom-bar d-flex justify-content-between">
                {/* copyright and policy */}
                <div className="legal d-flex flex-row mt-4 gap-4">
                    <span className="copyright">Copyright © 2023 3legant. All rights reserved</span>
                    <div className="d-flex flex-row gap-3">
                        <span className="policy">Privacy Policy</span>
                        <span className="policy">Terms of Use</span>
                    </div>
                </div>
                {/* social media */}
                <div className="social d-flex flex-row gap-2 align-items-center">
                    <img src={insta} alt="insta" />
                    <img src={fb} alt="facebook" />
                    <img src={yt} alt="youTube" />
                </div>
            </div>
        </div>
    )
}

export default Footer