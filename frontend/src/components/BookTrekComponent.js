import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import "../CSS/Style.css";

import { useEffect, useState ,useReducer} from "react";

import { useNavigate } from "react-router-dom";
import TrekerNav from "./NavBarTrekComponent";


export default function BookTrekComponent()
{

  const navigate = useNavigate();
    const userinfo=JSON.parse(localStorage.getItem('loggedinfo'))
    const  plantrekingo=JSON.parse(localStorage.getItem('onepack'))
   //console.log(plantrekingo)
   const user_id = localStorage.getItem("user_id");
     
  //  const user_id=userinfo.uid;
  //  const li=userinfo.login_id;
   const [trek, setTrek] = useState(null);
   const [error, setError] = useState(null);
   console.log(trek)
   const[order,setOrder]=useState(null);
   //localStorage.setItem('order', order);
  console.log(order)
  //  const info=trek;



   useEffect(() => {
    if (user_id) {
      fetch(`http://localhost:8080/userid/${user_id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(loginId => {
          localStorage.setItem("loginid",loginId);
          return fetch(`http://localhost:8080/profile/${loginId}`)
          
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.length > 0) {
            setTrek(data[0]); // Set only the first object
          }
        })
        .catch(error => {
          setError(error);
          console.error('Error fetching data:', error);
        });
    }
  }, [user_id]);


  const lid = localStorage.getItem("loginid");

     const  sendData=()=>{
          const reqOption ={
            method : 'POST',
            headers :{'content-type':'application/json'},
            body: JSON.stringify({
              trekker_id: lid ,
              plantrek_id:plantrekingo.plantreks_id,
              members:1,
              amount:plantrekingo.price
            })
          }
          fetch("http://localhost:8080/trekbooking",reqOption)
          .then(resp=>{
            console.log("In Edit Method");
            console.log(resp);
            if(resp.ok)
            { 
              return resp.text();
            }
           else
            {
              throw new Error("server error")
           }
          
        })

         .then(data=>localStorage.setItem('order', data))
         navigate("/pay");
         
      }
      
    return(
        <div>
            <TrekerNav/>
            <h1>Welcome:{userinfo.uid}</h1>
            <Container>
            
                                <table  className="c-tabletouristinfo">
                                <tr>
                                    <th colSpan={2}>
                                {/* <h2>Your Info </h2> */}
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <h5>Name :</h5> */}
                                    </td>
                                    <td>
                                      {/* <h5> {trek.fname} {trek.lname}</h5> */}

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <h5>Contact :</h5> */}
                                    </td>
                                    <td>
                                      {/* <h5>{trek.contact}</h5> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <h5>Email :</h5> */}
                                    </td>
                                    <td>
                                      {/* <h5>{trek.email} </h5> */}
                                    </td>
                                </tr>
                               
                                </table>

                               <table className="table">
                                 <tr>
                                    <td><h3>Trek Name</h3></td>
                                    <td>{plantrekingo.trekidobj.trek_name}</td>
                                 </tr>
                                 <tr>
                                  <td><h3>Level </h3></td>
                                  <td>{plantrekingo.trekidobj.level}</td>
                                 </tr>
                                 <tr>
                                  <td><h3>Amount</h3>
                                  </td>
                                  <td>{plantrekingo.price}</td>
                                 </tr>
                                </table> 
                              <button onClick={()=>sendData()}>Book</button>
            </Container>
        </div>
    )
}