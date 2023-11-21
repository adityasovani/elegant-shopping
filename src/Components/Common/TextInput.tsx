import React from 'react'

type Props = {
    placeholder?: string;
    wrapperStyle?: any;
    inputStyle?: any;
    type?: string;
};

const TextInput: React.FC<Props> = ({ placeholder, wrapperStyle, inputStyle, type }) => {
    return (
        <div style={wrapperStyle}>
            <input type={type ?? 'text'} className='w-100 textinput' placeholder={placeholder} style={inputStyle} />
        </div>
    )
}

export default TextInput;