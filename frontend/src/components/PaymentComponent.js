import TrekerNav from "./NavBarTrekComponent";
import '../CSS/Payment.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function PaymentComponent()
{
    const [paymentMode, setPaymentMode] = useState("");
     const [transactionId, setTransactionId] = useState("");
     const navigate = useNavigate();
     const [trekkerId, setTrekkerId] = useState("");
     const t_id = localStorage.getItem('loginid');



     const  plantrekingo=JSON.parse(localStorage.getItem('onepack'))
    // console.log(plantrekingo)
     
     
     const  booktrek=JSON.parse(localStorage.getItem('order'))
    // console.log(booktrek)

    useEffect(()=>{
        const randomId = Math.floor(Math.random() * 1000000);
        setTransactionId(`${randomId}`);

        
    },[])

    const  sendData=()=>{
        
        
            const reqOption ={
              method : 'POST',
              headers :{'content-type':'application/json'},
              body: JSON.stringify({
                payment_mode:paymentMode,
                transaction_id:transactionId,
                amount:4500,
                booking_id:booktrek.booking_id,
                plantrek_id:plantrekingo.plantreks_id,
                trekker_id:t_id
              })
            }
            fetch("http://localhost:8080/payment",reqOption)
            .then(resp=>{
             // console.log("In Edit Method");
             
              console.log(resp);
             // alert(resp);
              if(resp.ok)
              { 
                return resp.text();
            }  
             else
              {
                throw new Error("server error")
             }  
          })
          navigate("/trekker_home");
           
           
            
        }

        const handleChange = (e) => {
            const selectedValue = e.target.value;
            console.log("Selected Value:", selectedValue);
            setPaymentMode(selectedValue);
        };

    return(
        <div >
            <TrekerNav/>
             <div className="paymetnout">
                <br></br>
                <br></br>
               <h1 className="pay">PAYMENT</h1>
               <br></br>
              <form className="payform">
                <table>
                    <tr> 
                        <td colSpan={2}>Payment Mode:</td>
                        <td colSpan={2}>
                            <select value={paymentMode} onChange={handleChange}>
                                <option value="NetBanking">NetBanking</option>
                                <option value="UPI">UPI</option>
                                <option value="Card Payment">Card Payment</option>
                            </select>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td colSpan={2}>Payment Amount:</td>
                        <td colSpan={2}>2000</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td colSpan={4}><button class="btn btn-primary"  onClick={()=>sendData()} > Make Payment</button></td>
                    </tr>
                    
                </table>
              </form>

             </div>
        </div>
    )
}