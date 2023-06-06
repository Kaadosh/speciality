
import React from 'react';
import logo from '../../public/img/specialty_logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu'
import Menu from './Menu';
import FormSearch from './FormSearch'



const Header = () => {
return (
    <header>
    <div className=' container mx-auto px-4 sm:px-6 flex justify-start items-end lg:px-8'> 
        <Image
    src={logo}
    width={80}
    height={20}
    alt="logo"
    className='mt-6 mr-4'
    />
    <FormSearch />
    <BurgerMenu />
        </div>
    <Menu />
    <div className=' border-b-2 bg-slate-400'></div>
    </header>
        )
}

export default Header