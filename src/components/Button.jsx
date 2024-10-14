import React from 'react'

const Button = ({ name, icon, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {icon}
            {name}
        </button>
    )
}

export default Button;