import { useSelector,useDispatch } from "react-redux";
import "./Login.css"
import { useEffect, useState } from "react"
import {login,submit} from "./store"


function Login(){
    const [username,setusername]=useState("");
    const [pass,setpass]=useState("")
     const User=useSelector((state)=>state.user.logins)
     const user=useSelector((state)=>state.user.user)
     const dispatch=useDispatch()
     const handlelogin=()=>{
        if(username===""||pass===""){
            alert("Fill two fields username,password")
        }
        else{
        dispatch(login({
                    username:username,
                    password:pass,
                }
                    ));
        const userr={
            username:username,
            password:pass
        };
        console.log("new:",userr)
        localStorage.setItem(
            "currentUser",JSON.stringify(userr)
        )
       
     }
    }
      console.log("currlog",localStorage.getItem("currentUser"),User)
       useEffect(()=>{
        localStorage.setItem("logins",JSON.stringify(User))
    },[User])
    return(
        <div className="popup">
            <div className="box">
                <h1>Login</h1>
                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}className="form-control" placeholder="Enter Name"/>
                <input type="password"className="form-control" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Enter password (set Strong password)"/>
                <button className="btn btn-primary w-25" onClick={handlelogin}
                    >Login</button>
  
            </div>

        </div>
    )
}
export default Login