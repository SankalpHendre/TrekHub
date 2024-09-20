import logo1 from "../Images/treklogo.png";
import { Link } from "react-router-dom";

export default function NavBarTrekComponent()
{
    const loggedst = (localStorage.getItem('loggedstatus'));
    return(
        <div>
            <nav className="navbar navbar-expand-sm mb-3 c-navcolor" style={{ display: loggedst ? "block" : "none" }}>
                <div className="container-fluid ">
                    <div className="c-webname">
                    <img src={logo1} height="40px" width="40px" color="green" style={{textDecoration:"none"}}></img>&ensp;&ensp;
                        TREKHUB
                    </div>

                    <ul className="navbar-nav navbar-right ">

                    <li className="nav-item ">
                            <Link to="/trekker_home" style={{textDecoration:"none"}} className="c-navlink px-3">Trekker Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/trekkerprofile" style={{textDecoration:"none"}} className="c-navlink px-3">Profile</Link>
                        </li>
                     
                        <li className="nav-item ">
                            <Link to="/updatetrekkerprofile" style={{textDecoration:"none"}} className="c-navlink px-3">UpdateProfile</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/logout" style={{textDecoration:"none"}} className="c-navlink px-3">Logout</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}