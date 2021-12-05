import { useSelector , useDispatch} from "react-redux";
import authSelectors from '../../redux/auth/auth-selectors'
import authOperations from "../../redux/auth/auth-operations";
import s from "./UserMenu.module.css";
function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    return (
        <div className={s.container}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUY4CLhH57AZ2T9uosLxHd2BOaOLl7Ag5SQ&usqp=CAU"
                alt="Welcome"
                className={s.img}
            ></img>
            <p className={s.text}>{name}</p>
            <button type="button" className={s.button} onClick={()=>dispatch(authOperations.logOut())}>Logout</button>
        </div>
    )
} 

export default UserMenu;