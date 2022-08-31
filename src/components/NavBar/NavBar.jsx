import s from './NavBar.module.css';

const NavBar = ()=>{
    return (
        <nav className={s.NavBar}>
            <div className={s.logoBlock}>
                <img src="" alt=""/>
                <p>Danil V</p>
            </div>

            <ul>
                <li className={s.menu__item}>About</li>
                <li className={s.menu__item}>Services</li>
                <li className={s.menu__item}>Pricing</li>
                <li className={s.menu__item}>Blog</li>
            </ul>
        </nav>
    )
}


export {NavBar};