import React from 'react';


const Button = ({ onClick, text, disabled, extraClasses}) => {
    const buttonClasses = ` btn hidden lg:block lg:bg-purple-600 lg:hover:bg-blue-700 lg:text-wite lg:font-bold lg:py-2 lg:px-4 lg:rounded-full lg:text-white ${disabled ? 'opacityy-50 cursor-not-allowed' : '' } ${extraClasses}`;
  return (
    
    <button onClick={onClick} disabled={disabled} className={buttonClasses} >{text}</button>
  )
}

export default Button;