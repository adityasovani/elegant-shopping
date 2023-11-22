import React from 'react';
import { Card } from 'react-bootstrap';
import './Slider.css';
import Stars from '../Stars/Stars';

type Props = {
    id: number;
    name: string;
    image: string;
    rating: number;
    price: number
}

const ProductCard: React.FC<Props> = ({ id, name, image, rating, price }) => {
    return (
        <Card className='card-container col-md-3'>
            <div className="tags">
                <div className="new">New</div>
                <div className="discount">-50%</div>

            </div>
            {/* image */}
            <div className="card-image h-75 d-flex bg-grey">
                <img src={image} alt={name} className='card-img' />
            </div>
            {/* footer */}
            <div className="d-flex flex-column container-fluid">
                <Stars stars={rating} />
                <div className="mt-1">
                    <span className="product-name">{name}</span>
                </div>
                <div className="mt-1">
                    <span className="price">{`$${price}`}</span>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard;