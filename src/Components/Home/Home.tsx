import React from 'react';
import './Home.css';
import NotificationBar from '../Common/NotificationBar/NotificationBar';
import Navbar from '../Navbar/Navbar';
import { Carousel } from 'react-bootstrap';
import CategoryBanners from '../Banners/CategoryBanners';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import FeatureCard from '../FeatureCard/FeatureCard';

// icons / images
import freeShipping from '../../Assets/Images/freeshipping.svg';
import moneyback from '../../Assets/Images/moneyback.svg';
import secure from '../../Assets/Images/secure.svg';
import callIcon from '../../Assets/Images/247.svg';

const Home: React.FC = () => {

    const features = [
        {
            image: freeShipping,
            title: 'Free Shipping',
            caption: 'Order above $200'
        },
        {
            image: moneyback,
            title: 'Money-back',
            caption: '30 days guarantee'
        },
        {
            image: secure,
            title: 'Secure Payments',
            caption: 'Secured by Stripe'
        },
        {
            image: callIcon,
            title: '24/7 Support',
            caption: 'Phone and Email support'
        },
    ]

    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            <NotificationBar />
            <div className="d-flex w-75 flex-column">
                <Navbar />

                {/* hero banner slider */}
                <div className='banner-container d-flex justify-content-center'>
                    <Carousel className='w-100'>
                        <Carousel.Item className='d-flex justify-content-center'>
                            <img
                                src={require('../../Assets/Images/heroBanner1.png')}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={require('../../Assets/Images/heroBanner1.png')}
                                alt="2nd slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* Text header */}
                <div className="row mt-4">
                    <div className="col-md-6 col-sm-12 header-title">
                        Simply Unique <span className="slash">/</span> Simply Better <span className="slash">.</span>
                    </div>
                    <div className="col-md-6 col-sm-12 header-caption d-flex justify-content-center align-items-center">
                        <span>
                            <span style={{ fontWeight: 600 }}>3legant</span>&nbsp;
                            <span>is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</span>
                        </span>

                    </div>
                </div>

                {/* Banner set of 3 */}
                <CategoryBanners />

                {/* New arrival */}
                <ProductCarousel />

                {/* Fetture Cards */}
                <div className="mt-3 mb-5 d-flex gap-3 flex-row w-100">
                    {
                        features.map((feature, idx) => (
                            <div className="col-md-3 col-sm-12">
                                <FeatureCard {...feature} key={idx} />
                            </div>
                        ))
                    }
                </div>

                {/* page block */}

            </div>
        </div>
    )
}

export default Home