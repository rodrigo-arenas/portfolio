import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blogs from "./pages/Blogs"
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills/Skills";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <ScrollToTop />
                <Routes>
                    <Route path={"/"} exact element={<Home/>}/>
                    <Route path={"/projects"} exact element={<Projects/>}/>
                    <Route path={"/Blogs"} exact element={<Blogs/>}/>
                    <Route path={"/Skills"} exact element={<Skills/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>

    )

}

export default App;
