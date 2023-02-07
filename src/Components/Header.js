import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="flex justify-between items-center px-8 bg-primary text-white w-full h-20 z-10 font-poppins">
      <label class="relative block w-5/6">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <BiSearchAlt2 />
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-secondary w-full h-12 border-none rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search..."
          type="text"
          name="search"
        />
      </label>{" "}
      <nav className="hidden md:block">
        <ul className="flex items-center justify-evenly w-2/3 ">
          <li>
            <a href="">
              <RxAvatar />
            </a>
          </li>

          <li>
            <a href="">
              <MdOutlineNotificationsNone />
            </a>
          </li>
          <li>
            <a href="">English</a>
          </li>
          <li>
            <a href="">USD</a>
          </li>
        </ul>
      </nav>
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
