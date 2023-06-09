import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <div className="menu-container w-full overflow-x-auto mt-4 mb-4">
      <div className=' pb-1'>
      <ul className="menu flex justify-start p-0 m-0 list-none whitespace-nowrap lg:justify-center">
        <li className="px-4"><Link href='/'>Молотый кофе</Link></li>
        <li className="px-4"><Link href='/'>Кофе Италии</Link></li>
        <li className="px-4"><Link href='/'>Кофе в зернах</Link></li>
        <li className="px-4"><Link href='/'>Кофемашины для дома</Link></li>
        <li className="px-4"><Link href='/'>Капсулы</Link></li>
        <li className="px-4"><Link href='/'>Кофе в зернах</Link></li>
        <li className="px-4"><Link href='/'>Кислотность 5</Link></li>
        <li className="px-4"><Link href='/'>Посуда для кофе</Link></li>
        {/* Добавьте остальные пункты меню при необходимости сюда */}
      </ul>
      </div>
    </div>
  );
};

export default Menu;