
import {useState} from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/Untitled5.png";

const NavbarItem = ({title,classProps }) => { 
  return(
    <li className= {`mx-4 cursor-pointer text-xl flex justify-between items-center flex-1 ${classProps}`}>
      {title}</li>
  )

}
const Navbar = () => {
   const [toggleMenu , setToggleMenu] = useState(false);
  return (
    
        <nav className="w-full flex md:justify-center justify-between items-center p-4  ">
            <div className="md:flex-[0.5] flex-initial justify-center item-center">
                <img src= {logo}  alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
              {["Market", "Exchange", "Tutorial", "Wallets"].map((item,index) => (
                <NavbarItem key={item + index} title={item}/>
              ) ) }
              <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition-all text-lg rounded-full mx-4">LOGIN</li>
            </ul>
            <div className="flex relative">
                {!toggleMenu && (
                  <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />)}
                {toggleMenu && (
                  <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />)}
                {toggleMenu && (
                 <ul
                  className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                  flex flex-col justify-start items-end rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10  text-white animate-slide-in">
                <li className="text-xl w-full my-2 "><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => <NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />,
                )}
              </ul>
               )}
            </div>
            </nav>
    
  )
}

export default Navbar
