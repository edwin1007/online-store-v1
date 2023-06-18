import React from "react";
import {
  RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine, RiSearch2Line,
  RiArrowDownSLine, RiDeleteBin6Line
} from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/**title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
          <p className="text-gray-500">07 octubre 2022</p>
        </div>

        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
            <input type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 
                                  outline-none"
              placeholder="Search" />
          </div>
        </form>
      </div>
      {/**Tabs */}
      <nav className="text-gray-300 flex items-center justify-between lg:justify-start lg:gap-8
                        md:border-b mb-6">
        <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute
                                  before:bg-[#EC7C6A] before:left-0 before:rounded-full 
                                  before:-bottom-[1px] text-[#EC7C6A]">
          Hot dishes</a>

        <a href="#" className="py-2 pr-4">Cold dishes</a>

        <a href="#" className="py-2 pr-4">Soup</a>

        <a href="#" className="py-2 pr-4">Grill</a>
      </nav>
    </header>
  )
}

export default Header;