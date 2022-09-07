import React from 'react';
import s from "./MenuItemsList.module.css";
import {Link} from "react-router-dom";

const MenuItemsList = ({customClass}) => {
    return (
        <ul className={`${s.menu} ${customClass}` }>
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
    );
};

export { MenuItemsList};
