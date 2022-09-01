import s from './NavBar.module.css';

const NavBar = ()=>{
    return (

        <nav className={s.NavBar}>

                <ul className={s.menu}>
                    <li className={s.menu__item}>Home</li>
                    <li className={s.menu__item}>Works</li>
                    <li className={s.menu__item}>Blog</li>
                    <li className={s.menu__item}>Contacts</li>
                </ul>


        </nav>

    )
}


export {NavBar};