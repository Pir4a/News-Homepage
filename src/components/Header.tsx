import logo from "../../assets/images/logo.svg"

function Header() {
  return (
    <div className="header flex justify-between w-4/5 py-12 m-auto ">
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
  )
}

export default Header
