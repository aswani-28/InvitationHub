import { useEffect, useRef } from "react";
import "./home.css"
import { useSelector,useDispatch } from "react-redux";
import "./preview.css"
import {edit,update,det} from "./store";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas"
function Preview(){
    const cardref=useRef();
    const downloadcard=async()=>{
        const canvas=await html2canvas(cardref.current);
        const image=canvas.toDataURL("image/png");
        const link=document.createElement("a");
        link.href=image;
        link.download="aswani.png";
        link.click();
    }
    const templatebg={
   Birthday:"birthday1.png",
   Wedding:"wedding1.png",
  BabyShower:"babyshower1.png",
  Anniversary:"aniversary1.png",
  Graduation:"graduation1.png",
  Housewarming:"housewarmig1.png",
  Engagement:"engagement1.png",
  Farewell:"farewell1.png",
  Retirement:"retairement1.png",
  Festival:"festival1.png",
  CorporateEvent:"corpoate1.png",
  NewYear:"newyear1.png",
    }
    const formatTime=(time)=>{
        return new Date(`1970-01-01T${time}`)
        .toLocaleTimeString([],{
            hour:"numeric",
            minute:"2-digit",
            hour12:true,
        })
    }
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const data=useSelector((state)=>state.user.user)
    const logins=useSelector((state)=>state.user.logins)
    const currentUser=JSON.parse(
        localStorage.getItem("currentUser")
    )
    useEffect(()=>{
        localStorage.setItem("cardss",JSON.stringify(data))
    },[data])
    const mytemp=data.filter(
        item=>item.username===currentUser?.username &&
        item.password===currentUser?.password
    )
    console.log("mytemp",mytemp)
   
    return(
        <div className="preview"> 
        {mytemp.length>0?
            mytemp.map((item)=>{
                return(
                    <div key={item.id}  className="card"  >
                        <p className="para">{item.template} Theme</p>
                        <div className="overlay" ref={cardref} style={{backgroundImage:`url(${item.template==="custom"?item.custom:templatebg[item.template]})`,backgroundColor:item.template==="pickcolor"?item.bgcolor:"transparent" }}>
                    <div className="five"  style={{background:item.template==="custom"?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.5)",border:item.template==="pickcolor"?"3px double gray":"none"}} >
                    <h5>🎉 YOU'RE INVITED 🎉</h5>
                    <p>Join us to Celebrate</p>
                    <h4>{item.name}'S {item.occasion}</h4>
                    
                    <p>🥳 Let's make it a day full of fun, laughter, and unforgettable memories!</p>

                  <p>  📅 Date: {item.date}</p>
                   <p> ⏰ Time: {formatTime(item.time)} onwards</p>
                    <p>📍 Venue: {item.venue}
                    </p>

                   <h6>{item.message}</h6> 
                    <h6>🍕 Food, Games & Music</h6>

                    <p>Your presence will make this celebration even more special!</p>

                    <h5>With Love,</h5>
                   <h4> {item.name} & Family</h4>

                    <h6>📞 RSVP: +91{item.mobile}</h6>
                </div>
                </div>
                <div className="but">
                  
                <button className="a btn btn-light fs-5 fw-normal bg-gradient shadow pt-2" onClick={()=>{dispatch(edit(item))
                    navigate("/create")}
                }>Edit</button>
                <button className="a btn btn-light fs-5 fw-normal bg-gradient shadow pt-2" onClick={()=>{dispatch(det(item.id))}}>Delete</button>
                
                </div>
                    </div>


                )
            
            }
        ):<h4 className="pre">No previous cards</h4>
        
        }
        
        </div>
    )
}
export default Preview;