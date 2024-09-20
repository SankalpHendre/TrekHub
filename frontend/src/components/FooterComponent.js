import "../CSS/FooterStyle.css"
import { Button, Container } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsFillTelephoneFill} from "react-icons/bs";
import {BiCopyright} from "react-icons/bi"
import {SiGmail} from "react-icons/si"
import happy from "../Images/footerimage.png"


export default function FooterComponent() {
    return (
        <div>
            <Container fluid className="c-footermainclass">
                <Row  >
                    <Col xs={6} md={4} >
                        <div className="c-footerdiv">
                            <div >
                                <h1>TREKHUB</h1>

                                <p>
                                    This website will help to arrange a treks with appropriate packages
                                    so that trekkers can plan a trek easily with the trek guide.

                                </p>
                            </div>
                        </div>

                    </Col>
                    <Col xs={6} md={4}>
                        <div className="c-footerdiv">
                            <div className="c-footerdivhappycust" >
                              <h5></h5>
                              <img src={happy} ></img>
                            </div>
                        </div>


                    </Col>

                    <Col xs={6} md={4}>
                        
                        <div className="c-footerdivthird">
                            <div>
                            <h4><b>Contact us</b></h4>
                            <br></br>
                            <br></br>
                            <h5><span><BsFillTelephoneFill/></span>&ensp;&ensp;&ensp;+91 7387670430</h5>
                            <h5><span><SiGmail/></span>&ensp;&ensp;&ensp;trekhub@gmail.com</h5>
                            <br></br>
                            <div className="c-footericon">
                            < BsFacebook size="25px"/> 
                              <BsInstagram size="25px"/> 
                              <BsLinkedin size="25px"/> 
                             <BsTwitter size="25px"/>  
                            </div>
                            </div>
                        </div>

                    </Col>

                </Row>
                <Row>
                    <Col xs={12}>
                       <div className="c-footecopyright">
                        <div>
                        <p>  <BiCopyright/> 2024 TREKHUB</p>
                        </div>
                       
                       </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}