import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "../CSS/Style.css";
import { Row, Col } from "react-bootstrap";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Link, useNavigate } from "react-router-dom";


export default function GetBookingComponent() {

    const[allBookings, setallBookings] = useState([]);
    const [startdate,setStartDate]=useState('');
    const [enddate,setEndDate]=useState('');
    const[amount,setAmount]=useState('')

    const handleStartDateChange=(event)=>{
        setStartDate(event.target.value);
    };

    const handleEndDateChange=(event)=>{
        setEndDate(event.target.value);
    };

    const handleAmountChange=(event)=>{
        setAmount(event.target.value);
    }

    useEffect(() => {
        fetch("https://localhost:7029/api/Trekbookings")
            .then(resp => resp.json())
            .then(bookings => setallBookings(bookings))

    },[]);  
    
    const handelSearchClick=()=>{
        fetch("https://localhost:7029/api/Trekbookings/ondatebooking?startdate="+startdate+"&enddate="+enddate)
            .then(resp => resp.json())
            .then(bookings => setallBookings(bookings))
    }

    const handelAmountSearchClick=()=>{
        fetch("https://localhost:7029/api/Trekbookings/onamount?amount="+amount)
            .then(resp => resp.json())
            .then(bookings => setallBookings(bookings))
    }

    return (
        <div>
           
            <Container fluid>
            <Row>
                    <Col>
                    <h1>Bookings</h1>
                    <table>
                        <tr>
                            <td><label>Start Date : </label></td>
                            <td><input type="date" value={startdate} onChange={handleStartDateChange}></input></td>
                            <td><label>End Date : </label></td>
                            <td><input type="date" value={enddate} onChange={handleEndDateChange}></input></td>
                            <td><button onClick={handelSearchClick}>Search</button></td>  
                        </tr>
                        <tr>
                        <td><label>Amount : </label></td>
                            <td><input type="amount" value={amount} onChange={handleAmountChange}></input></td>
                            <td><button onClick={handelAmountSearchClick}>Search</button></td>
                        </tr>
                    </table>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                    
                        <br></br>
                        <table className="c-disppackagetable">
                            <tr>
                                <th>Booking ID</th>
                                <th>Booking Date</th>
                                <th>Trekker ID</th>
                                <th>Plantrek ID</th>
                                <th>Members</th>
                                <th>Amount</th>
                            </tr>    
                            {
                                allBookings.map((allbook,i) => {
                                    return <tr>
                                        <td>{allbook.bookingId}</td>
                                        <td><b>{allbook.bookingDate}</b></td>
                                        <td>{allbook.trekkerId}</td>
                                        <td>{allbook.plantrekId}</td>
                                        <td>{allbook.members}</td>
                                        <td>{allbook.amount}</td>
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







