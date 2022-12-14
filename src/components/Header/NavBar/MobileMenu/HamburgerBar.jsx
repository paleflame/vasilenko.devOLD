import s from './HamburgerBar.module.css';
import Menu from "./Menu";
import {useState} from "react";

// rsc - создание шаблонной компоненты
const HamburgerMenu = ()=>{
    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className={s.HamburgerMenu}>
            <button className={s.burgerButton} onClick={()=> setMenuActive(!menuActive)}>
                <span/>
                <span/>
                <span/>
            </button>

            <Menu active={menuActive} setActive={setMenuActive}/>
        </nav>


    )
}

export {HamburgerMenu};


