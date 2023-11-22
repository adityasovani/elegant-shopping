import React from 'react';
import './FeatureCard.css';

type Props = {
    image: any;
    title: string;
    caption: string;
};

const FeatureCard: React.FC<Props> = ({ image, title, caption }) => {
    return (
        <div className='feature-card gap-2'>
            <img src={image} alt={title} />
            <span className='title'>{title}</span>
            <span className='caption'>{caption}</span>
        </div>
    )
}

export default FeatureCard