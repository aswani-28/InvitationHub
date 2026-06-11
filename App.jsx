import Navbar from "./Navbar";
import Login from "./Login";
import "./App.css"
import { useSelector,useDispatch } from "react-redux";
import {make} from "./store"
function App(){
  const user=useSelector((state)=>state.user.logins)
  const log=useSelector((state)=>state.user.log)
  const dispatch=useDispatch()
  const currentUser=JSON.parse(
        localStorage.getItem("currentUser")
    );
  return(
    <div className="bod">
      <div className="top">
      {log?<h1 id="title">|nvitationhub</h1>:""}
     {log? <button className="btn btn-dark fs-25" onClick={()=>dispatch(make())}>Login</button>:""}
      <h4>{log?currentUser?.username:""}</h4>
      </div>
       {
        log?<Navbar/>:<Login/>
      }
      
    </div>
  )
}
export default App;