import './globalCSS/App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Blog} from "./components/_Pages/Blog/Blog";
import {Works} from "./components/_Pages/Works/Works";
import {Contacts} from "./components/_Pages/Contacts/Contacts";
import {Home} from "./components/_Pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route path={'/blog'} element={<Blog/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/works'} element={<Works/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>

        </Routes>
        <Footer/>




    </div>
  );
}

export default App;
