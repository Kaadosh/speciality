
import React from 'react';
import logo from '../../public/img/specialty_logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu'
import Menu from './Menu';
import FormSearch from './FormSearch';
import Button from './Button';
import TopMenu from './TopMenu'



const Header = () => {
return (
    <header>
        <TopMenu />
        <div className=' border-b-2 bg-slate-400'></div>
    <div className=' container mx-auto px-4 sm:px-6 flex justify-center items-end lg:px-8 '> 
        <Image
    src={logo}
    width={80}
    height={20}
    alt="logo"
    className='mt-6 mr-6 sm:w-36 sm:h-11 lg:w-44 lg:h-11'
    />
    <Link href='/catologe'> 
    <Button text="Каталог" extraClasses='w-40 h-11 mr-4' />
    </Link>
    <FormSearch />
    <BurgerMenu />
        </div>
    <Menu />
    <div className=' border-b-2 bg-slate-400'></div>
    </header>
        )
}

export default Header