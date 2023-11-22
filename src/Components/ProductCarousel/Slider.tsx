import React from 'react';
import './Slider.css';
import ProductCard from './Card';

const Slider: React.FC = () => {

    const products = [
        {
            "id": 1,
            "name": "Loveseat Sofa",
            "rating": 5,
            "num_of_reviews": 255,
            "description": "A sofa where you can sit and view the elegance of the free world as it unfolds right in front of you.",
            "price": 199,
            "image": "https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/product_images/09e9f258591ca60c51fbb83b2fe3c83b.jpg"
        },
        {
            "id": 2,
            "name": "Table Lamp",
            "rating": 4,
            "num_of_reviews": 80,
            "description": "A lamp which will enlighten your knowledge as always.",
            "price": 24.99,
            "image": "https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/product_images/33f1e0c5a7b0e2f947e18bbaa1f98631.jpg"
        },
        {
            "id": 3,
            "name": "Beige Table Lamp",
            "rating": 5,
            "num_of_reviews": 56,
            "description": "A table lamp, but of beige variation.",
            "price": 24.99,
            "image": "https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/product_images/d6a4fcdae9afe0cebeb8ddc0bbac23e5.jpg"
        },
        {
            "id": 4,
            "name": "Bamboo basket",
            "rating": 5,
            "num_of_reviews": 99,
            "description": "A basket made out of bamboo where you can keep your stuff. With an easy object retrieval mechanism.",
            "price": 24.99,
            "image": "https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/product_images/fa00ebebad3df271f7911cf7595d715e.jpg"
        },
        {
            "id": 5,
            "name": "Toasted",
            "rating": 5,
            "num_of_reviews": 63,
            "description": "A toaster, where you can toast your bread. Don't forget to apply butter before!\nFair warning: Don't let your cats nearby this thing.",
            "price": 224.99,
            "image": "https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/banner_images/Hero%20Banner%201/3eeb4bae1ece56d9ba8a20ca64ab2791.jpg"
        }
    ];

    return (
        <div className='d-flex flex-row mb-3 slider-container' style={{ overflowX: 'auto' }}>
            {
                products.map(product => (
                    <ProductCard {...product} />
                ))
            }
        </div>
    )
}

export default Slider