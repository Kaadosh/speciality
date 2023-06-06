import React, { useState } from 'react';
import { Transition } from "@headlessui/react"
import Image from 'next/image';
import burger from '../../public/img/icon/menu.png'
import closeIcon from '../../public/img/icon/x.png'
import home from '../../public/img/icon/home_header.png'
import cataloge from '../../public/img/icon/catalog_header.png'
import basket from '../../public/img/icon/basket_header.png'
import favorite from '../../public/img/icon/favorites_header.png'
import profile from '../../public/img/icon/profile_header.png'

const  BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return ( 
    <div className='relative flex ml-4'>
      <button onClick={toggleMenu} className=' focus:outline-none'>
        <Image src={burger} width={36} height={36} alt='burger_menu' className='mt-5' />
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
                    <Image src={home} width={40} height={40} alt='home_icon' />
                    <a href='/' className=' block '>Главная</a>
                  </li>
                  <li>
                  <Image src={cataloge} width={40} height={40} alt='catologe_icon' />
                    <a href='/' className=' block '>Каталог</a>
                  </li>
                  <li>
                  <Image src={basket} width={40} height={40} alt='basket_icon' />
                    <a href='/' className=' block '>Корзина</a>
                  </li>
                  <li>
                  <Image src={favorite} width={40} height={40} alt='favorite_icon' />
                    <a href='/' className=' block '>Избранное</a>
                  </li>
                  <li>
                  <Image src={profile} width={40} height={40} alt='profile_icon' />
                    <a href='/' className=' block '>Профиль</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}

      </Transition>

    </div>
  )
}

export default BurgerMenu;