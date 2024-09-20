import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "../CSS/Style.css";
import { Row, Col } from "react-bootstrap";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Link, useNavigate } from "react-router-dom";


export default function GetPaymentComponent() {

    const [allPayments, setallPayments] = useState([]);
    const [startdate,setStartDate]=useState('');
    const [enddate,setEndDate]=useState('');

    const handleStartDateChange=(event)=>{
        setStartDate(event.target.value);
    };

    const handleEndDateChange=(event)=>{
        setEndDate(event.target.value);
    };

    useEffect(() => {
        fetch("https://localhost:7029/api/Payments")
            .then(resp => resp.json())
            .then(payments => setallPayments(payments))

    },[]);  
    
    const handelSearchClick=()=>{
        fetch("https://localhost:7029/api/Payments/ondate?startdate="+startdate+"&enddate="+enddate)
            .then(resp => resp.json())
            .then(payments => setallPayments(payments))
    }

    return (
        <div>
           
            <Container fluid>
                <Row>
                    <Col>
                    <h1>Transactions</h1>
                    <table>
                        <tr>
                            <td><label>Start Date : </label></td>
                            <td><input type="date" value={startdate} onChange={handleStartDateChange}></input></td>
                            <td><label>End Date : </label></td>
                            <td><input type="date" value={enddate} onChange={handleEndDateChange}></input></td>
                            <td><button onClick={handelSearchClick}>Search</button></td>
                        </tr>
                    </table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                        <br></br>
                        <table className="c-disppackagetable">
                            <tr>
                                <th>Payment ID</th>
                                <th>Payment Mode</th>
                                <th>Transaction ID</th>
                                <th>Amount</th>
                                <th>Payment Date</th>
                            </tr>    
                            {
                                allPayments.map((allpay,i) => {
                                    return <tr>
                                        <td>{allpay.paymentId}</td>
                                        <td><b>{allpay.paymentMode}</b></td>
                                        <td>{allpay.transactionId}</td>
                                        <td>{allpay.amount}</td>
                                        <td>{allpay.paymentDate}</td>
                                    </tr>
                                })
                            }
                        </table>

                    </Col>
                </Row>
            </Container>

        </div>

    )
}







