
import React from "react";
import search from "../image/search.png";
import Image from 'next/image';

function FormSearch() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="я ищу..."
          className="pl-2 border border-gray-300 rounded-full w-32 h-8 focus:outline-none"
        />
        <img src="../image/search.png" width={16} height={16} alt="search" />
      </form>
    </div>
  );
}

export default FormSearch;
