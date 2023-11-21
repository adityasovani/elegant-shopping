import React from 'react';
import './common.css';

type Props = {
    text: string;
    style?: any;
    disabled?: boolean;
};

const Button: React.FC<Props> = ({ text, style, disabled }) => {
    return (
        <button className='button' style={style} disabled={disabled}> {text}</button>
    )
}

export default Button