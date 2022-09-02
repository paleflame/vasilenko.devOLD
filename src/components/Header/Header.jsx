import s from './Header.module.css';
import {NavBar} from "./NavBar/NavBar";
import {HeaderContent} from "./HeaderContent/HeaderContent";
import {Routes, Route} from "react-router-dom";
import {Works} from "../_Pages/Works/Works";
import {PageHeading} from "./PageHeading/PageHeading";

const Header = ()=>{
    return(
        <header className={s.Header}>
            <div className={"containerXL"}>
                <NavBar/>
                <Routes>

                    <Route path={'/home'}
                           element={<HeaderContent/>}/>
                    <Route path={'/blog'}
                           element={<PageHeading headingText={"Blog"} />}/>
                    <Route path={'/works'}
                           element={<PageHeading headingText={"Works"} />}/>
                    <Route path={'/contacts'}
                           element={<PageHeading headingText={"Contacts"} />}/>

                </Routes>

            </div>



        </header>
    )
}


export {Header};