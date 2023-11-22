import React from 'react';
import star from '../../Assets/Icons/star.svg';

type Props = {
    stars: number;
};

const Stars: React.FC<Props> = ({ stars }) => {
    return (
        <div className="d-flex flex-row gap-1">
            {
                Array.from(Array(stars).keys()).map((idx) => (
                    <img src={star} key={idx} />
                ))
            }
        </div>
    )
}

export default Stars