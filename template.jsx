import { useState } from "react";
import "./home.css"
import "./template.css"
import { Link } from "react-router-dom";
import {submit,addtemp} from "./store";
import { useDispatch,useSelector } from "react-redux";
function Template(){
    const [temp,settemp]=useState("")
    const dispatch=useDispatch()
    const templates=[
  "Birthday",
  "Wedding",
  "BabyShower",
  "Anniversary",
  "Graduation",
  "Housewarming",
  "Engagement",
  "Farewell",
  "Retirement",
  "Festival",
  "CorporateEvent",
  "NewYear",
    ]
    return(
        <div className="template"> 
        <div className="row">
            <h2>Template Themes</h2>
            {templates.map((item)=>{
                return(
            <Link to="/create" id="temp" key={item}>
            <div className="single" onClick={()=>dispatch(addtemp(item))}>
                <h3>{item}</h3>
            </div>
            </Link>

                )
            })
            
}
            
            <h2>UserDefined </h2>
            <Link to="/create" id="temp">
            <div className="single" onClick={()=>dispatch(addtemp("custom"))}>
                <h3>Custom</h3>
            </div>
            </Link>
            <Link to="/create" id="temp">
            <div className="single"  onClick={()=>dispatch(addtemp("pickcolor")
            )}>
                <h3>Pick Color</h3>
            </div>
            </Link>
        </div>
        </div>
    )
}
export default Template;