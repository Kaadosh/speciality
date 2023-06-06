import React from "react";
import Image from 'next/image';
import search from "../../public/img/icon/search.png";

function FormSearch() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="search"
          placeholder="я ищу..."
          className="pl-2 border border-gray-300 rounded-full w-32 h-8 focus:outline-none "
        />
        <div className="absolute top-2 right-2 flex items-center ">
          <Image
            src={search}
            alt="search"
            width={22}
            height={22}
            className="text-black pr-1"
          />
        </div>
      </div>
    </div>
  );
}

export default FormSearch;