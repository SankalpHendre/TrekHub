import { Row,Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/AdminHome.css";
import logo1 from "../Images/treklogo.png";
import logo2 from "../Images/a.jpg";

export default function AdminHomeComponent() {

    const loggedst = (localStorage.getItem('loggedstatus'));
    console.log("logged status "+loggedst)

    return (
        <div className="background-container">
            <div className="background-image" style={{ backgroundImage: `url(${logo2})` }}></div>
            <Container fluid>
          <Row >
            <nav className="navbar navbar-expand-sm mb-3 c-navcolor" style={{ display: loggedst ? "block" : "none" }}>
                <div className="container-fluid ">
                    <div className="c-webname">
                    <img src={logo1} height="40px" width="40px" color="green" style={{textDecoration:"none"}}></img>&ensp;&ensp;
                        TREKHUB
                    </div>

                    <ul className="navbar-nav navbar-right ">

                        <li className="nav-item ">
                            <Link to="/admin_home" style={{textDecoration:"none"}} className="c-navlink px-3">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="guidereg" style={{textDecoration:"none"}} className="c-navlink px-3">AddGuide</Link>
                        </li>

                        <li className="nav-item ">
                            <Link to="guidelist" style={{textDecoration:"none"}} className="c-navlink px-3">GuideList</Link>
                        </li>
                     
                        <li className="nav-item ">
                            <Link to="addtrek" style={{textDecoration:"none"}} className="c-navlink px-3">AddTrek</Link>
                        </li>

                        <li className="nav-item ">
                            <Link to="plantrek" style={{textDecoration:"none"}} className="c-navlink px-3">PlanTrek</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="bookreport" style={{textDecoration:"none"}} className="c-navlink px-3">Booking-Report</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="paymentreport" style={{textDecoration:"none"}} className="c-navlink px-3">Payment-Report</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="logout" style={{textDecoration:"none"}} className="c-navlink px-3">Logout</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <Col md={{span: 4 , offset : 4}} >
            </Col>
            </Row>
            <Outlet/>
            </Container>  
        </div>

    )
}