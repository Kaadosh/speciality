import React from 'react';


const Button = ({ onClick, text, disabled, extraClasses}) => {
    const buttonClasses = ` btn hidden xl:block xl:bg-[#6667ab] xl:hover:bg-blue-700 xl:text-wite xl:font-bold xl:py-2 lg:px-4 xl:rounded-full xl:text-white ${disabled ? 'opacityy-50 cursor-not-allowed' : '' } ${extraClasses}`;
  return (
    
    <button onClick={onClick} disabled={disabled} className={buttonClasses} >{text}</button>
  )
}

export default Button;