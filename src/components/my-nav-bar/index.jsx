import { NavLink } from "react-router-dom";
import './navbar.css'

export default function MyNavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
    </nav>
  );
}
