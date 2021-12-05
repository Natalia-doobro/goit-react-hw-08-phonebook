import { Ripple } from "react-spinners-css";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.container}>
      <Ripple color="darkviolet" size={500} />
    </div>
  );
};

export default Loader;
