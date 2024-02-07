import logo from "../../assets/images/logo.svg"

function Header() {
  return (
    <div className="header flex justify-between">
      <span>
        <img src={logo} />
      </span>
      <nav className="navbar">
        <ul className="flex gap-10 font-reg">
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
