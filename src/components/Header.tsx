import logo from "../../assets/images/logo.svg"
import menuopen from "../../assets/images/icon-menu.svg"
import menuclose from "../../assets/images/icon-menu-close.svg"
import { useState } from "react"

function Header() {
  let [isMenuOpen, setMenu] = useState(false)

  return (
    <>
      <div className="header hidden lg:flex justify-between w-4/5 py-12 m-auto">
        <span>
          <img src={logo} className="cursor-pointer" />
        </span>
        <nav className="navbar">
          <ul className="flex gap-10 font-regular cursor-pointer">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
      <div className="header flex lg:hidden justify-between w-11/12 m-auto py-12  overflow-hidden">
        <span>
          <img src={logo} className="cursor-pointer" />
        </span>
        <button
          className=" "
          onClick={() => {
            setMenu(!isMenuOpen)
            console.log(isMenuOpen)
          }}
        >
          <img src={menuopen} />
        </button>
        <nav
          className={
            !isMenuOpen
              ? "w-[0px] invisible absolute text-white"
              : "origin-right w-2/3 duration-500 ease-out bg-white z-10 h-full absolute right-0"
          }
        >
          <button
            className={isMenuOpen ? "fixed top-[55px] right-5" : "hidden"}
            onClick={() => {
              setMenu(!isMenuOpen)
              console.log(isMenuOpen)
            }}
          >
            <img src={menuclose} />
          </button>
          <ul className="flex flex-col gap-7 font-regular cursor-pointer items-baseline px-7 justify-center h-3/5 font-bld text-lg">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
