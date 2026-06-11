import "./home.css"
import "./create.css"
import {submit,addtemp,update,removetemp} from "./store";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Create(){
    const navigate=useNavigate()
     const users=useSelector((state)=>state.user.user)
     const temp=useSelector((state)=>state.template.selected)
     const edit=useSelector((state)=>state.user.edit)
     const logins=useSelector((state)=>state.user.logins)
     console.log("temp=>",temp,"edit=>",edit,"end")
    const [name,setname]=useState("")
    const [occasion,setoccasion]=useState("")
    const [time,settime]=useState("")
    const [date,setdate]=useState("")
    const [venue,setvenue]=useState("")
    const [mobile,setmobile]=useState("")
    const [message,setmessage]=useState("")
    const [template,settemplate]=useState(temp)
    const [custom,setcustom]=useState("");
    const [bgcolor,setbgcolor]=useState("#ffffff");
    const dispatch=useDispatch()
    const currentUser=JSON.parse(
        localStorage.getItem("currentUser")
    );
    console.log("currentuser",currentUser)
   const handlesubmit=()=>{
        if(edit===null){

        if(template.trim()===""||name.trim()===""||occasion.trim()===""||mobile.trim()===""||date.trim()===""||time.trim()===""||venue.trim()===""){
            alert("fill All the fields")
        }
        else{
            dispatch(submit({
                name:name,
                occasion:occasion,
                date:date,
                time:time,
                venue:venue,
                mobile:mobile,
                message:message,
                template:temp,
                custom:custom,
                bgcolor:bgcolor,
                username:currentUser?.username,
                password:currentUser?.password,
                }
            ))
            localStorage.setItem("data",users)
        }
        
    }
    else{
        dispatch(update({
            id:edit.id,
           name:name,
                occasion:occasion,
                date:date,
                time:time,
                mobile:mobile,
                venue:venue,
                message:message,
                template:temp,
                custom:custom,
                bgcolor:bgcolor,
                username:currentUser?.username,
                password:currentUser?.password,
        }))
    }
    }
    const emptyfields=()=>{
    setname("")
    setoccasion("")
    setdate("")
    settime("")
    setmobile("")
    setvenue("")
    setmessage("")
    settemplate("")
    setcustom("")
    setbgcolor("#ffffff")
    dispatch(removetemp())
    
    }
    const handleClick=()=>{
        handlesubmit();
        emptyfields();
        navigate("/preview")
        dispatch(removetemp())
        
    }
    console.log("temp=>",temp)
    useEffect(()=>{
        if(edit){
            setname(edit.name);
            setoccasion(edit.occasion)
            setdate(edit.date)
            settime(edit.time)
            setmobile(edit.mobile)
            setvenue(edit.venue)
            setmessage(edit.message)
            settemplate(edit.template)
            setcustom(edit.custom)  
            setbgcolor(edit.bgcolor) 
        }
    },[edit])
    console.log("log edit",edit)
    const handleimage=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        reader.onloadend=()=>{
            setcustom(reader.result);
            settemplate("custom");
        };
        reader.readAsDataURL(file);
    }
    return(
        <div className="create">
        <div className="form">
            <h4>Create a new Invitation Card</h4>
         { temp==="custom" ?<div className="divv">
                <h5>Upload imagebg:</h5>
                <input type="file" accept="image/*" onChange={handleimage} className="form-control" />
            </div>:
            temp==="pickcolor"?(<div className="divv">
                <h5>Pick Color:</h5>
                <input type="color" className="form-control" value={bgcolor} onChange={(e)=>setbgcolor(e.target.value)}/>
            </div>):
            (<div className="divvv" onClick={()=>navigate("/template")}>
                <h5 className="tempp">Template</h5>
                <h6 className="templ">{temp?temp:edit?(edit.template):("(Select)")}</h6>
            </div>)
            
            }
            {console.log("editcreate",edit,temp,"editcrete")}
            <div className="divv">
                <h5>Name:</h5>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" placeholder="Enter Name"/>
            </div>
            <div className="divv">
                <h5>Occasion:</h5>
                <input type="text" value={occasion} onChange={(e)=>setoccasion(e.target.value)} className="form-control" placeholder="Enter Occasion (birthday/wedding day)"/>
            </div>
            <div className="divv">
                <h5>Date:</h5>
                <input type="date" value={date} onChange={(e)=>setdate(e.target.value)}className="form-control" placeholder="Enter Date"/>
            </div>
            <div className="divv">
                <h5>Time:</h5>
                <input type="time" value={time} onChange={(e)=>settime(e.target.value)}className="form-control" placeholder="Enter Time"/>
            </div>
            <div className="divv">
                <h5>Venue:</h5>
                <input type="text" value={venue} onChange={(e)=>setvenue(e.target.value)}className="form-control" placeholder="Enter Venue"/>
            </div>
            <div className="divv">
                <h5>Mobile:</h5>
                <input type="number" value={mobile} onChange={(e)=>setmobile(e.target.value)} className="form-control" placeholder="Enter Mobile"/>
            </div>
            <div className="divv">
                <h5>Message:</h5>
                <input type="text" value={message} onChange={(e)=>setmessage(e.target.value)}className="form-control" placeholder="Enter Messages you have to include" />
            </div>
            
            <div className="divv">
                <button className="a btn btn-light w-25 fs-5 fw-normal bg-gradient shadow pt-2" onClick={
                    emptyfields
                }>Reset</button>
                
            <button className="c btn btn-light w-25 fs-5 fw-normal bg-gradient shadow pt-2" onClick={handleClick}
            >Submit</button>
            </div>
            {console.log(users)}
        </div>
        </div>
    )
}
export default Create;