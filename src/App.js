import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blogs from "./pages/Blogs"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NavBar from "./components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/projects"} exact component={Projects}/>
                    <Route path={"/Blogs"} exact component={Blogs}/>
                    <Route path={"/Skills"} exact component={Skills}/>
                </Routes>
            </div>
        </Router>

    )

}

export default App;
