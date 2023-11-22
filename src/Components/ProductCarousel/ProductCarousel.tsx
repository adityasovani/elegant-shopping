import React from 'react';
import './ProductCarousel.css';
import Slider from './Slider';
import arrow from '../../Assets/Icons/arrowRightBlack.svg';

const ProductCarousel: React.FC = () => {
    return (
        <div className='new-arrivals-container'>
            <div className="carousel-header justify-content-between d-flex flex-row">
                <h1 className="carousel-title">
                    New Arrivals
                </h1>
                <div className="d-flex flex-row align-items-end mb-2">
                    <div className="d-flex h-100 align-items-center" style={{ gap: '0.25rem', cursor: 'pointer' }}>
                        <span className='viewMore'>More Products</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <Slider />
            </div>
        </div>
    )
}

export default ProductCarousel