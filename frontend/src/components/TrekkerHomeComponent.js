import { Row,Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../CSS/AdminHome.css";
import logo2 from "../Images/a.jpg";
import FooterComponent from "./FooterComponent";

import TrekKerNavComponent from "./NavBarTrekComponent";
import SearchTrekComponent from "./SearchTrekComponent";

export default function TrekkerHomeComponent() {

    const loggedst = (localStorage.getItem('loggedstatus'));
    console.log("logged status "+loggedst)

    return (
        <div className="background-container">
            <div className="background-image" style={{ backgroundImage: `url(${logo2})` }}></div>
            <Container fluid>
          <Row >
            <TrekKerNavComponent/>
            <div>
            <SearchTrekComponent/>
            </div>
            
            <FooterComponent/>
            <Col md={{span: 4 , offset : 4}} >
            
            </Col>
            
            </Row>
            
            <Outlet/>
            </Container>  
            
        </div>

    )
}