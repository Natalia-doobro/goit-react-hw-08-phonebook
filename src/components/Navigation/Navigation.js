import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import authSelectors  from '../../redux/auth/auth-selectors';
import s from "./Navigation.module.css";

function Navigation() {
   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact="true" className={s.link}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={s.link}>Contacts</NavLink>}
      
    </nav>
  )
  
}
export default Navigation;
