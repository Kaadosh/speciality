
import React from 'react';
import logo from '../../public/img/specialty_logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import  BurgerMenu from "./BurgerMenu";
import Menu from './Menu';



const Header = () => {
return (
    <header>
    <div className=' container mx-auto px-4 sm:px-6 flex justify-between items-baseline gap-4 lg:px-8'>
        <div className='flex'> 
        <Image
    src={logo}
    width={80}
    height={20}
    alt="logo"
    className='mt-6 mr-4 '
    />
    <form className='flex '>
        <input type='search' placeholder='я ищу...' className=' mt-5 pl-2 border border-gray-300 rounded-full w-32 h-8 focus:outline-none' />
    </form>
    <BurgerMenu />
        </div>
    </div>
    <Menu />
    </header>
        )
}

export default Header