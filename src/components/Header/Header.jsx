import s from './Header.module.css';
import {NavBar} from "./NavBar/NavBar";
import {HeaderContent} from "./HeaderContent/HeaderContent";

const Header = ()=>{
    return(
        <header className={s.Header}>
            <div className={"containerXL"}>
                <NavBar/>
                <HeaderContent/>
            </div>



        </header>
    )
}


export {Header};