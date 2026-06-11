import "./home.css";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="homem">
        <div className="home">
        <p> | Create Beautiful Digital Invitations for Every Celebration |</p>
        <h6>Design,customize,priview,and download proffessional invitations in minutes.</h6>
        
        <div className="div2">
            <div className="div21">
                <h4>Categories</h4>
                <div className="icondi"> 
                    <img src="birthday.png"/>
                    <h5>Birthday</h5>
                </div>
                <div className="icondi"> 
                    <img src="wedding.png"/>
                    <h5>Wedding</h5>
                </div>
                <div className="icondi"> 
                    <img src="babyshower.png"/>
                    <h5>Baby Shower</h5>
                </div>
                <div className="icondi"> 
                    <img src="graduation.png"/>
                    <h5>Graduation</h5>
                </div>
                <div className="icondi"> 
                    <img src="party.png"/>
                     <h5>Party</h5>
                </div>
            </div>
            <div className="div21">
                <h4>Templates</h4>
                <h5>Kids birthday</h5>
                <h5>Pricess Theme</h5>
                <h5>Modern birthdays</h5>
                <h5>Floral Design</h5>
                <h5>Elegant Invitation</h5>
                
            </div>

        </div>
        <div className="div1">
             <Link to="/template" id="but">
            <button className="a btn btn-light fs-5 fw-normal bg-gradient shadow pt-2">Browse Templates</button>
            </Link>
            <Link to="/create" id="but">
            <button className="a btn btn-light fs-5 fw-normal bg-gradient shadow pt-2 ">Create Invitation</button>
            </Link>
           
        </div>
        </div>
        <div className="instruction">
            
            <div className="second">
                
                <div className="icondi"> 
                    <img src="howcreate.png"/>
                    <h4>How It Works</h4>
                </div>
                 
                <div className="icondiv"> 
                    <Link to="/template" id="linkk">
                    <img src="choose.png"/>
                    
                    <h5>Choose Template  </h5>
                    </Link>
                </div>
               
                <div className="icondiv"> 
                    <Link to="/create" id="linkk">
                    <img src="adddata.png"/>
                    <h5>Add Details </h5>
                    </Link>
                </div>
                <div className="icondiv" > 
                    <Link to="/create" id="linkk">
                    <img src="upload.png"/>
                    <h5>Upload Photos  </h5>
                    </Link>
                </div>
                <div className="icondiv"> 
                    <Link to="/preview" id="linkk">
                    <img src="priviewblack.png"/>
                    <h5>Preview Invitation  </h5>
                    </Link>
                </div>
                <div className="icondiv"> 
                    <Link to="/downloads"  id="linkk">
                    <img src="downblack.png"/>
                    <h5>Download  </h5>
                    </Link>
                </div>
            </div>
            <div className="third">
                <h4>Sample Invitation Card</h4>
                <div className="four">
                    <h5>🎉 YOU'RE INVITED 🎉</h5>
                    <p>Join us to Celebrate</p>
                    <h3>CHANDINI'S BIRTHADAY PARTY</h3>
                    <p>🥳 Let's make it a day full of fun, laughter, and unforgettable memories!</p>
                  <p>  📅 Date: 31st May 2026</p>
                   <p> ⏰ Time: 6:00 PM onwards</p>
                    <p>📍 Venue: Rainbow Party Hall, Vijayawada
                    </p>
                   <h6>🎂 Cake Cutting: 7:00 PM</h6> 
                    <h6>🍕 Food, Games & Music</h6>

                    <p>Your presence will make this celebration even more special!</p>

                    <h5>With Love,</h5>
                   <h4> Chandini & Family</h4>

                    <h6>📞 RSVP: +91 XXXXX XXXXX</h6>
                </div>
            
            

            </div>

        </div>
        
       </div>
    )
}
export default Home;