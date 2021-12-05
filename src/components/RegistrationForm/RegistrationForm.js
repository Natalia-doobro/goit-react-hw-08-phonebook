import { NavLink } from "react-router-dom";
import s from "./RegistrationForm.module.css";

function RegistrationForm() {
   
  return (
    <div>
      <NavLink to="/register" className={s.link}>Register</NavLink>
      <NavLink to="/login" className={s.link}>Login</NavLink>
    </div>
  )
  
}



export default RegistrationForm;
