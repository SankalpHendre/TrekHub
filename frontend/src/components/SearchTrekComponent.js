import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import '../CSS/Style.css';

export default function SearchTrekComponent()
{

 
    const [allpackages, setAllPackages] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/getallPlanTrek")
         .then((resp) => resp.json())
        .then((pkgs) => setAllPackages(pkgs));
  
         console.log("i sreaching")
   
  
      }, []);
      
      const [toggle, setToggle] = useState({});
      function toggleFunction(id) {
        setToggle({
            ...toggle,
            [id]: !toggle[id],
        });
        
        }
       
        const gotoBookTrek=(i)=> {


          const tinfo =(localStorage.getItem("loggedinfo"));
          if(tinfo == null)
          {
               alert("Please Login to Book Tour");
               
          }
          else 
          {    
            console.log(allpackages[i].avail_seats); 
    
            if(allpackages[i].avail_seats==0)
            {
              alert("Tour is already booked");
            } 
            else
            { 
              //console.log(allpackages[i]);
              const onepackge=allpackages[i];
              //console.log(onepackge)
              
              localStorage.setItem("packageforBookTrek",JSON.stringify(allpackages[i]));
              localStorage.setItem("onepack",JSON.stringify(onepackge));
              //navigate("/trekbook",{state :{onepackge}});
              navigate("/trekbook");
              
            }
            
          }
        
    
    }
    


       console.log(allpackages)
       return(
        <div >
            <h1>Book Your Trek</h1>
         <div class="c-TrekPortal-1">
             {allpackages.map((allpk,i) => {
           return(
          <div class="c-TrekPortal">  
              <div className="c-touristpackageimages">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 25,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={true}
                  className="mySwiper"
               >
                  {allpk.trekidobj.trekimageobj.map((img, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <img
                          src={`data:image/jpeg;base64,${img && img.trek_image}`}
                          className="c-touristsingleimage"
                          alt=""
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>






            <div class="card-body c-card-content">
                <div>
                    <h4 className="card-title">{allpk.trekidobj.trek_name}</h4>
                    <h6>{allpk.price}/rs</h6>
                    <h6>
                  <span>Start Date&ensp; &ensp;</span>
                  <span>Book Till</span>
                  <br />
                  <span>{allpk.start_date}&ensp; &ensp;</span>
                  <span>{allpk.last_date_apply}</span>
                </h6>
                <button id="c-dispimgbtn-treker" onClick={() => toggleFunction(allpk.plantreks_id)}>Show More</button>
                </div>
                
                <div className="c-mainpackageallinfo" style={{ display: toggle[allpk.plantreks_id] ? "block" : "none" }}>
                <div className="c-packageallinfo">
                  <div className="c-1divinfo">
                    <table
                      className="table border"
                      // border={1}
                    >
                      <tr>
                        <td colspan={2}>
                          <h1>{allpk.trekidobj.trek_name}</h1>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Start Date </h5>
                        </td>
                        <td>
                          <h5>{allpk.start_date}</h5>
                        </td>
                      </tr>
                     
                      <tr>
                        <td>
                          <h5>Last Date To Apply</h5>
                        </td>
                        <td>
                          <h5>{allpk.last_date_apply}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                         
                          <h5>Trek Price</h5>
                        </td>
                        <td>
                          <h5>{allpk.price} rs</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        
                          <h5>Duration</h5>
                        </td>
                        <td>
                          <h5>{allpk.trekidobj.duration} Days</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          
                          <h5>Capacity</h5>
                        </td>
                        <td>
                          <h5>{allpk.trekidobj.capacity}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          
                          <h5>Available Seats</h5>
                        </td>
                        <td>
                          <h5>{allpk.avail_seats}</h5>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          
                          <h5>Trek level</h5>
                        </td>
                        <td>
                          <h5>{allpk.trekidobj.level}</h5>
                        </td>
                      </tr>
                      
                    </table>
                  </div>
                  <div className="c-2divinfo">
                    <h3>Description</h3>
                    <div><h5>{allpk.trekidobj.description}</h5>

                    </div>
                    <br></br>
                    <h3>Locations</h3>
                       
                       <h5>{allpk.trekidobj.location}</h5>
                     
                  </div>    
                         
                </div>
                <div className="c-packagebtntourist">
                 
                  <div>
                    <button className="" id="c-dispimgbtn-tourist1" onClick={()=> gotoBookTrek(i)}>
                      Book Trek 
                    </button>
                  </div>

                  <div>
                    <button className="" id="c-dispimgbtn-tourist1" onClick={() => toggleFunction(allpk.plantreks_id)}>
                      Close
                    </button>
                  </div>
                </div>
              </div> 


             </div> 
             </div>  
             )})}
          </div>
        
       </div>
       )
      
}