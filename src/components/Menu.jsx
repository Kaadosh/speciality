import React from 'react';

const Menu = () => {
  return (
    <div className="menu-container w-full overflow-x-auto mt-4 mb-4">
      <div className=' pb-1'>
      <ul className="menu flex p-0 m-0 list-none whitespace-nowrap">
        <li className="px-4">Молотый кофе</li>
        <li className="px-4">Кофе Италии</li>
        <li className="px-4">Кофе в зернах</li>
        <li className="px-4">Кофемашины для дома</li>
        <li className="px-4">Капсулы</li>
        <li className="px-4">Кофе в зернах</li>
        <li className="px-4">Кислотность 5</li>
        <li className="px-4">Посуда для кофе</li>
        {/* Добавьте остальные пункты меню здесь */}
      </ul>
      </div>
    </div>
  );
};

export default Menu;