import s from './NavBar.module.css';
import {MenuItemsList} from "./MenuItemsList/MenuItemsList";

const NavBar = () => {
    return (

        <nav className={s.NavBar}>
            <MenuItemsList/>


        </nav>

    )
}


export {NavBar};