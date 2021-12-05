import { useSelector } from "react-redux";
import authSelectors from '../../redux/auth/auth-selectors'
import Navigation from "../Navigation";
import RegistrationForm from "../RegistrationForm";
import UserMenu from "../UserMenu";
import s from "./AppBar.module.css";

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <RegistrationForm />}
    </header>
  );
}
export default AppBar;
