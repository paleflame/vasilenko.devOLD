import './globalCSS/App.css';

import {Header} from "./components/Header/Header";
import {RecentPosts} from "./components/RecentPosts/RecentPosts";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <RecentPosts/>

        <Footer/>
    </div>
  );
}

export default App;
