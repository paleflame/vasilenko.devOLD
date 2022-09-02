import './globalCSS/App.css';

import {Header} from "./components/Header/Header";
import {RecentPosts} from "./components/_Pages/Home/RecentPosts/RecentPosts";
import {Footer} from "./components/Footer/Footer";
import {FeaturedWorks} from "./components/_Pages/Home/FeaturedWorks/FeaturedWorks";

function App() {
  return (
    <div className="App">

        <Header/>
        <RecentPosts/>
        <FeaturedWorks/>
        <Footer/>
    </div>
  );
}

export default App;
