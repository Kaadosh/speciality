import React from "react";
import Image from 'next/image';
import search from "../../public/img/icon/search.png";
import Button from './Button';
function FormSearch() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="я ищу..."
          className="pl-2 border border-gray-300 rounded-full w-32 h-8 focus:outline-none sm:w-80 sm:h-12 lg:w-[515px] lg:h-11 "
        />
        <div className="absolute top-2 sm:top-3 right-2 flex items-center ">
          <Image
            src={search}
            alt="search"
            width={22}
            height={22}
            className="text-black pr-1 sm:w-6 sm:h-6 lg:hidden" 
          />
          <Button extraClasses='sm:hidden w-[75px] h-11 mr-4 sm:relative sm:right-[-2.5rem] sm:top-[-0.75rem] sm:flex sm:items-center' />
        </div>
      </div>
    </div>
  );
}

export default FormSearch;