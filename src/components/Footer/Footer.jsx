import s from './Footer.css';


const Footer =()=>{
    return (
        <footer className={s.Footer}>
            <ul className={s.icons}>
                <li>
                    <a href="#">
                        <img className={s.icon}
                             src="../../../public/icons/instagram.svg"  alt=""/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className={s.icon}
                             src="../../../public/icons/twitter.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className={s.icon}
                             src="../../../public/icons/fb.svg"  alt=""/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className={s.icon}
                             src="../../../public/icons/insta.png" alt=""/>
                    </a>
                </li>
            </ul>
        
        </footer>
    )
}




export {Footer};