import React from 'react';
import './ProductCarousel.css';
import Slider from './Slider';
import arrow from '../../Assets/Icons/arrowRightBlack.svg';

const ProductCarousel: React.FC = () => {
    return (
        <div className='new-arrivals-container'>
            {<Header moreTitle='More Products' title='New Arrivals'/>}
            <div className="mt-3">
                <Slider />
            </div>
        </div>
    )

}

type HeaderProps = {
    title: string;
    moreTitle: string;
}

export const Header:React.FC<HeaderProps> = ({title, moreTitle}) => {
    return <div className="carousel-header justify-content-between d-flex flex-row">
        <h1 className="carousel-title">
            {title}
        </h1>
        <div className="d-flex flex-row align-items-end mb-2">
            <div className="d-flex h-100 align-items-center" style={{ gap: '0.25rem', cursor: 'pointer' }}>
                <span className='viewMore'>{moreTitle}</span>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    </div>;
}

export default ProductCarousel