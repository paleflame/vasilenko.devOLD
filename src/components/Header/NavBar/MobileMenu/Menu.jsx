import React from 'react';
import s from "./Menu.module.css";
import {MenuItemsList} from "../MenuItemsList/MenuItemsList";

const Menu = ({active, setActive}) => {
    return (
        <div className={active ? `${s.menuWrapper} ${s.activated}` : s.menuWrapper}
             onClick={()=>{setActive(false)}}>

           <MenuItemsList customClass={s.MenuItemsList}/>


        </div>


    );
};

export default Menu;
