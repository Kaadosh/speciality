import { useState } from 'react';
import burger from '../../public/img/icon/menu.png'
import Image from 'next/image';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='px-4 sm:px-6 flex items-baseline  lg:px-8'>
      <button onClick={toggleMenu}>{<Image
    src={burger}
    width={36}
    height={36}
    alt="burger_menu"
    className=' mt-5'
    />}</button>
      {isOpen && (
        <nav>
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/catalog">Каталог</a>
            </li>
            <li>
              <a href="/cart">Корзина</a>
            </li>
            <li>
              <a href="/favorites">Избранное</a>
            </li>
            <li>
              <a href="/profile">Профиль</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;