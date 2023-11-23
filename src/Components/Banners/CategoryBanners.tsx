import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import './CategoryBanners.css';
import ArrowRight from '../../Assets/Icons/arrowRightBlack.svg';

const CategoryBanners: React.FC = () => {

    const [banners, setbanners] = useState<any>({});

    const getCategoryBanners = async () => {
        let { data: category_banners, error } = await supabase
            .from('category_banners')
            .select('*')
        if (!error) {
            return { data: category_banners };
        }
        else {
            return { errors: error }
        }
    };

    useEffect(() => {
        const getBanners = async () => {
            const banners = await getCategoryBanners();
            setbanners(banners);
        };
        getBanners();
    }, []);

    return (
        <div className="row mt-4 w-100">
            {/* big card */}
            <div className="col-md-6 col-sm-12">
                <div className="d-flex flex-column" style={{ position: "absolute" }}>
                    <span className="banner-title">Bedroom</span>
                    {<ShopNow />}
                </div>
                <img
                    alt="banner"
                    src="https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/banner_images/Hero%20Banner%201/c0350fd22c758331418f9169ec926583.jpg"
                    className="category-banner-image"
                />
            </div>
            {/* small cards */}
            <div className="col-md-6 d-flex flex-column">
                {/* sub card 1 */}
                <div className="col-12 d-flex flex-row w-75 align-items-center" >
                    <div className="d-flex flex-column" >
                        <span className="banner-title">Living Room</span>
                        <div className="flex-row d-flex" style={{ gap: "0.1rem" }}>
                            <span className="shop-now-link">Shop Now</span>
                            <img alt="->" src={ArrowRight} />
                        </div>
                    </div>
                    <img alt="banner" className="category-banner-image"
                        src="https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/banner_images/Hero%20Banner%201/chair-1.jpg"
                    />
                </div>
                {/* sub card 2 */}
                <div className="col-12 d-flex flex-row w-75 align-items-center" style={{ height: '20%' }}>
                    <div className="d-flex flex-column" >
                        <span className="banner-title">Kitchen</span>
                        <div className="flex-row d-flex" style={{ gap: "0.1rem" }}>
                            <span className="shop-now-link">Shop Now</span>
                            <img alt="->"
                                src={ArrowRight}
                            />
                        </div>
                    </div>
                    <img alt="banner" className="category-banner-image"
                        src="https://zazvmgbzjrvgfditeyly.supabase.co/storage/v1/object/public/banner_images/Hero%20Banner%201/3eeb4bae1ece56d9ba8a20ca64ab2791.jpg"
                    />
                </div>
            </div>
        </div>

        // <div className='row mt-4 w-100'>
        //     {banners?.data?.map((banner: any) => (
        //         <div className="col-md-6 col-sm-12" style={{ height: '35rem', }}>
        //             <div className='d-flex flex-column' style={{ position: 'absolute' }}>
        //                 <span className='banner-title'>{banner.category_name}</span>
        //                 <div className='flex-row d-flex' style={{ gap: '0.1rem' }}>
        //                     <span className='shop-now-link'>Shop Now</span>
        //                     <img src={ArrowRight} alt="->" />
        //                 </div>
        //             </div>
        //             <img alt="banner" src={banner.image} className="category-banner-image" />
        //         </div>
        //     ))}
        // </div>
    )

}
export const ShopNow = () => {
    return <div className="flex-row d-flex" style={{ gap: "0.1rem" }}>
        <span className="shop-now-link">Shop Now</span>
        <img
            src={ArrowRight}
            alt="->" />
    </div>;
};
export default CategoryBanners