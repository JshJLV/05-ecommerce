import { useState } from "react";
import { IconContext } from "react-icons";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <IconContext.Provider value={{ color: "white" }}>
      <nav className="w-full h-24 bg-gray-800 flex justify-around items-center">
        <button>
          <MdMenu className="w-9 h-9" onClick={showSidebar} />
        </button>
        <SideBar state={isOpen} propFunction={showSidebar} />
        <SearchBar />
        <button>
          <MdOutlineShoppingCart className="h-9 w-9" />
        </button>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
