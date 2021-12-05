import s from "../stiles/HomePage.module.css";
const HomePage = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Welcome to the phonebook!!!</h2>
            <img
                src="https://pm1.narvii.com/6483/80cbd25d4e0385da4a7287a25a973e6b416ac74c_hq.jpg"
                alt="Welcome"
                className={s.img}
            ></img>
            
        </div>
    )
};
export default HomePage;