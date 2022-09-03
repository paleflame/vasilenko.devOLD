import s from './Footer.module.css';
import instagram from './icons/instagram.svg';
import facebook from './icons/fb.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';
import {Icon} from "./Icon/Icon";

const Footer =()=>{
    return (
        <footer className={s.Footer}>
            <div className="containerXL">
                <ul className={s.icons}>
                    <Icon imageSrc={instagram} imageAlt={"instagram"}/>
                    <Icon imageSrc={facebook} imageAlt={"facebook"}/>
                    <Icon imageSrc={linkedin} imageAlt={"linkedin"}/>
                    <Icon imageSrc={twitter} imageAlt={"twitter"}/>

                </ul>
            <p className={s.copyright}>
                Copyright ©2022 All rights reserved

            </p>


            </div>

        
        </footer>
    )
}




export {Footer};