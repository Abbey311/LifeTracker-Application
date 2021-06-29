import { Link } from "react-router-dom"
import logo from "../../assets/codepath.svg"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Facebook from "../Icons/Facebook"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo" />
          </Link>
        </div>

        <ul className="links">
          <li>
            <Link to="/">Activity</Link>
          </li>
          <li>
            <Link to="/#About">Exercise</Link>
          </li>
          <li>
            <Link to="/#Contact">Nutrition</Link>
          </li>
          <li>
            <Link to="/#Buy">Sleep</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
