import s from './NavBar.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (

        <nav className={s.NavBar}>

            <ul className={s.menu}>
                <li className={s.menu__item}>
                    <Link className={s.link} to={"/home"}>
                        Home
                    </Link>

                </li>
                <li className={s.menu__item}>
                    <Link className={s.link} to={"/works"}>Works</Link>
                </li>
                <li className={s.menu__item}>
                    <Link className={s.link} to={"/blog"}>Blog</Link>

                </li>
                <li className={s.menu__item}>
                    <Link className={s.link} to={"/contacts"}>Contacts</Link>
                </li>
            </ul>


        </nav>

    )
}


export {NavBar};