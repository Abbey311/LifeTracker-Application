import { useState } from "react"
import { Link } from "react-router-dom"
import person from "../../assets/person.svg"
import "./SubNavbar.css"

export default function SubNavbar({
  user,
  activeCategory,
  setActiveCategory,
}) {
  const [open, setOpen] = useState(true)

  const toggleOpen = () => setOpen((isOpen) => setOpen(!isOpen))

  return (
    <nav className="SubNavbar">
      <div className="content">
        <div className="row">

          <div className="links">

            <div className="auth">
              {user?.email ? (
                <Link to="/orders">
                  <img src={person} alt="avatar" />
                  {user.email}
                </Link>
              ) : (
                <Link to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons" onClick={() => toggleOpen()}>
              menu
            </i>
          </div>

          <ul className={`category-menu ${open ? `open` : `closed`}`}>
            { ["Add Exercise", "Log Sleep", "Record Nutrition"].map((cat) => (
              <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
