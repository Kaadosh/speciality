import React, { useEffect, useState } from 'react';
import { Transition } from "@headlessui/react"
import Image from 'next/image';
import burger from '../../public/img/icon/menu.png'
import closeIcon from '../../public/img/icon/x.png'
import home from '../../public/img/icon/home_header.png'
import cataloge from '../../public/img/icon/catalog_header.png'
import basket from '../../public/img/icon/basket_header.png'
import favorite from '../../public/img/icon/favorites_header.png'
import profile from '../../public/img/icon/profile_header.png'
import heart from '../../public/img/icon/heart.svg';
import cart from '../../public/img/icon/package.png';
import shopping from '../../public/img/icon/shopping cart.png';
import user from '../../public/img/icon/user1.png';


import Link from 'next/link';

const  BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize =() => {
      setIsLargeScreen(window.innerWidth > 1280 );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(!isLargeScreen) {
  return ( 
      <div className='relative flex ml-4'>
        <button onClick={toggleMenu} className=' focus:outline-none'>
          <Image src={burger} width={36} height={36} alt='burger_menu' className='mt-5 sm:w-11 sm:h-11' />
        </button>
  
        <Transition 
          show={isOpen}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-200'
          leaveFrom='opasity-0'
          >
            {isOpen && (
              <div className=' fixed top-0 left-0 h-full w-full bg-white p-4 flex flex-col justify-center items-center'>
                <button onClick={closeMenu} className=' absolute top-4 right-4 focus:outline-none'>
                  <Image src={closeIcon} width={24} height={24} alt='close_icon' />
                </button>
                <nav>
                  <ul className=' flex flex-col justify-start items-stretch' >
                    <li>
                      <a href='/' className=' block  mb-4 '>
                        <Image src={home} width={53} height={30} alt='home_icon' />
                      </a>
                    </li>
                    <li>
                      <Link href='/catologe'  className=' block  mb-4 '>
                        <Image src={cataloge} width={53} height={30} alt='catologe_icon' />
                      </Link>
                    </li>
                    <li>
                      <Link href='/basket' className=' block mb-4 '>
                        <Image src={basket} width={53} height={30} alt='basket_icon' />
                      </Link>
                    </li>
                    <li>
                      <Link href='/favorite' className=' block  mb-4 '>
                        <Image src={favorite} width={53} height={30} alt='favorite_icon' />
                      </Link>
                    </li>
                    <li>
                      <Link href='/profile' className=' block  '>
                        <Image src={profile} width={53} height={30} alt='profile_icon' />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
  
        </Transition>
  
      </div>
    )
  }else {
    return(
      <nav>
        <ul className='flex items-center gap-4 mb-[10px] ml-6'>
        <li>
                      <a href='/' className=' flex ml-6 '>
                        <Image src={heart} width={24} height={24} alt='home_icon'/>
                      </a>
                    </li>
                    <li>
                      <Link href='/basket' className=' flex'>
                        <Image src={cart} width={24} height={24} alt='basket_icon' />
                      </Link>
                    </li>
                    <li>
                      <Link href='/favorite' className=' flex'>
                        <Image src={shopping} width={24} height={24} alt='favorite_icon' />
                      </Link>
                    </li>
                    <li>
                      <Link href='/profile' className=' flex'>
                        <Image src={user} width={24} height={24} alt='profile_icon' />
                      </Link>
                    </li>
        </ul>
      </nav>
    )
  }
24

}

export default BurgerMenu;