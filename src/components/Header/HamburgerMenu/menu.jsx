import React from 'react';
import s from "./menu.module.scss";
import {Link} from "react-router-dom";

const Menu = ({active, setActive}) => {
    return (
        <div className={active ? `${s.menuWrapper} ${s.activated}` : s.menuWrapper}
             onClick={()=>{setActive(false)}}>
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


        </div>


    );
};

export default Menu;
