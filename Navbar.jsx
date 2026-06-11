import {BrowserRouter,Routes,Route,Link} from "react-router-dom" 
import Home from "./home"
import Template from "./template"
import Create from "./create"
import Preview from "./preview"
import Downloads from "./downloads"
import "./Navbar.css"
function Navbar(){
    return(
        <BrowserRouter>
        <div className="links">
        <Link to="/" id="link"><img src="homeblack.png"/>Home</Link>
        <Link to="/template" id="link"><img src="templateblack.png"/>Template</Link>
        <Link to="/create"id="link" ><img src="createblack.png"/>Create</Link>
        <Link to="/preview" id="link"><img src="priviewblack.png"/>Preview</Link>
        <Link to="/downloads"id="link" ><img src="downblack.png"/>Dowloads</Link>
        </div>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/template" element={<Template/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/preview" element={<Preview/>}></Route>
            <Route path="/downloads" element={<Downloads/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navbar;