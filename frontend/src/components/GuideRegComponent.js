import '../CSS/Style.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useReducer, useState } from 'react';
import NavbarComponent from './NavbarComponent';
export default function GuideRegComponent()
{
    const initialState = {
        uid:{value:"",hasError:true,error:"",touched:false},
        pwd:{value:"",hasError:true,error:"",touched:false},
        fname:{value:"",hasError:true,error:"",touched:false},
        lname:{value:"",hasError:true,error:"",touched:false},
        email:{value:"",hasError:true,error:"",touched:false},
        contact:{value:"",hasError:true,error:"",touched:false},
        adharno:{value:"",hasError:true,error:"",touched:false},
        gender:{value:"",hasError:true,error:"",touched:false},
        addressline:{value:"",hasError:true,error:"",touched:false},
        city:{value:"",hasError:true,error:"",touched:false},
        pincode:{value:"",hasError:true,error:"",touched:false},
        isFormValid:false
    }

    const reducer = (state, action) => {
        switch(action.type) {
             case 'update':
                
                const {name,value,hasError, error, touched, isFormValid} = action.data;
                return { ...state, [name]: {value, hasError, error, touched}, isFormValid }
    
             case 'reset':
                return initialState
        }
    
    }
   
    const[user, dispatch] = useReducer(reducer , initialState );
        const [msg,setMsg] = useState("...")
    
           const handleChange=(name,value) => {
            //a. call validation logic
            const {hasError, error} = validateData(name, value)
    
            //b. check form validity status
            let isFormValid = true;
            for(const key in user)
            {
               // console.log(key+" : "+user[key].hasError )
                if(user[key].hasError === true)
                {
                    isFormValid = false;
                    break;
                }
            {/* else
                {
                    isFormValid=true;
                    break;
                }
            */}
               
            }         
    
            //c. call dispath method
            dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
        }
    

        const validateData = (name,value) => {
            let hasError = false;
            let error = "";
            switch(name){
            
                case "uid":
                var regex = /^[A-Za-z0-9]{6,15}$/;
                if (!regex.test(value)) {
                    hasError = true;
                    error = "UserId Should be between 6 - 15 characters no special symbol allowed"
                }
                break;
                case "pwd":
                    let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;
    
                    if (!regex1.test(value)) {
                        hasError = true;
                        error = "Password Should be more than 5 characters and having number and special symbol(Abc@123) "
                    }
                    break;
                case "fname":
                    let regex2 = /^[A-Za-z]{1,15}$/;
    
                    if (!regex2.test(value)) {
                        hasError = true;
                        error = "First Name Should be valid and not more than 15 characters"
                    }
                    break;
                case "lname":
                    let regex3 = /^[A-Za-z]{1,15}$/;
    
                    if (!regex3.test(value)) {
                        hasError = true;
                        error = "Last Name Should be valid and not more than 15 characters"
                    }
                    break;
                case "email":
                    let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
                    if (!regex4.test(value)) {
                        hasError = true;
                        error = "Email should be valid"
                    }
                    break;
                case "contact":
                    let regex5 = /^[0-9]{10}$/;
    
                    if (!regex5.test(value)) {
                        hasError = true;
                        error = "Contact Should be of 10 digits Only"
                    }
                    break;
                case "addressline":
                    let regex6 = /^[A-Za-z0-9'\.\-\s\,]{1,200}$/;
    
                    if (!regex6.test(value)) {
                        hasError = true;
                        error = "Address should be valid"
                    }
                    break;
                    case "adharno":
                        let regex12 = /^\d{4}\s\d{4}\s\d{4}$/;
                        if (!regex12.test(value)) {
                         hasError = true;
                         error = "Aadhar number should be of the format XXXX XXXX XXXX"
                     }
                         break;

                    case "gender": 
                    if (value=="") {
                        hasError = true;
                        error = "please select gender"
                    }
                    break;
                         case "city":
                            let regex8 = /^[A-Za-z]{1,}$/;
            
                            if (!regex8.test(value)) {
                                hasError = true;
                                error = "Enter valid city"
                            }
                            break;
                         case "pincode":
                            let regex9 = /^[0-9]{6}$/;
            
                            if (!regex9.test(value)) {
                                hasError = true;
                                error = "Enter valid pincode"
                            }
                            break;
            }
            return {hasError,error}
    
        }

        const submitData = (ev) => {
            ev.preventDefault()
            //console.log(JSON.stringify(emp))
            //send data to server to insert into db
            const reqOptions = {
                method:'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    uid: user.uid.value,
                    pwd:  user.pwd.value,
                    fname:  user.fname.value,
                    lname: user.lname.value,
                    email: user.email.value,
                    contact: user.contact.value,
                    adharno:user.adharno.value,
                    gender:user.gender.value,
                    addressline: user.addressline.value,
                    city:user.city.value,
                    pincode: user.pincode.value,
                    roleid:2,
                    
                })
            }
    
            fetch("http://localhost:8080/userreg",reqOptions)
            .then(res => res.text())
            .then(data => setMsg(data) )
    
    
        }


    return(
        <div >
          <Container scrollable>
            <Row>
            <Col  md={{ span: 4, offset:5 }} xs={{ span: 10, offset:1 }}>
            <div className='c-signupform scrollable'>
                    <h1><i>Registration Form</i></h1>
            </div>
            <form>
                <div className="form-group">
                <table className="table table-md c-table">
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="userid" id="uid" name="uid" value={user.uid.value} 
                                                        
                            onChange={(e)=>{handleChange("uid",e.target.value)}} className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.uid.touched && user.uid.hasError ? "block" : "none", color: "red" }}> {user.uid.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="password" placeholder="Password" id="pwd" name="pwd" value={user.pwd.value} 
                                                       
                            onChange={(e)=>{handleChange("pwd",e.target.value)}}     className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.pwd.touched && user.pwd.hasError ? "block" : "none", color: "red" }}> {user.pwd.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="firstname" id="fname" name="fname" value={user.fname.value}
                                                      
                        onChange={(e)=>{handleChange("fname",e.target.value)}}  className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.fname.touched && user.fname.hasError ? "block" : "none", color: "red" }}> {user.fname.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Lastname" id="lname" name="lname"  value={user.lname.value}
                                                        
                            onChange={(e)=>{handleChange("lname",e.target.value)}}     className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.lname.touched && user.lname.hasError ? "block" : "none", color: "red" }}> {user.lname.error} </p>
                        </td>
                     </tr>

                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Email" id="email" name="email" value={user.email.value}
                                                         
                          onChange={(e)=>{handleChange("email",e.target.value)}} className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.email.touched && user.email.hasError ? "block" : "none", color: "red" }}> {user.email.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="contact" id="contact" name="contact" value={user.contact.value}
                                                        
                       onChange={(e)=>{handleChange("contact",e.target.value)}}     className="form-control form-control-sm"/>
                        </td>
                    </tr>   
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.contact.touched && user.contact.hasError ? "block" : "none", color: "red" }}> {user.contact.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="adharno" id="adharno" name="adharno" value={user.adharno.value}
                                                     
                        onChange={(e)=>{handleChange("adharno",e.target.value)}}     className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.adharno.touched && user.adharno.hasError ? "block" : "none", color: "red" }}> {user.adharno.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <select id="gender" name="gender" 
                                onChange={(e)=>{handleChange("gender",e.target.value)}} 
                                value={user.gender.value}  className="form-control form-control-sm" >
                                <option value="">select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.gender.touched && user.gender.hasError ? "block" : "none", color: "red" }}> {user.gender.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="address line 1" id="addressline" name="addressline" value={user.addressline.value}
                                                       
                             onChange={(e)=>{handleChange("addressline",e.target.value)}}   className="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.addressline.touched && user.addressline.hasError ? "block" : "none", color: "red" }}> {user.addressline.error} </p>
                        </td>
                     </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="city" id="city" name="city" value={user.city.value}
                                                      
                        onChange={(e)=>{handleChange("city",e.target.value)}}  className="form-control form-control-sm"/>
                        </td>
                    </tr> 
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.city.touched && user.city.hasError ? "block" : "none", color: "red" }}> {user.city.error} </p>
                        </td>
                     </tr>  
                     <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="pincode" id="pincode" name="pincode" value={user.pincode.value}
                                                    
                              onChange={(e)=>{handleChange("pincode",e.target.value)}}     className="form-control form-control-sm"/>
                        </td>
                    </tr> 
                    <tr>
                      <td colSpan={2}>
                         <p style={{ display: user.pincode.touched && user.pincode.hasError ? "block" : "none", color: "red" }}> {user.pincode.error} </p>
                        </td>
                     </tr> 
                    <tr>
                        <td >
                            <button type="submit" onClick={(e)=>{ submitData(e) }} className='btn btn-block' id='c-allbtn1'>Register</button>
                        </td>
                    
                        <td >
                        <button type="reset" onClick={()=>{dispatch({type:'reset'})}} className='btn btn-block' id='c-allbtn1' >Reset</button>
                        </td>
                    </tr>
                </table>
                </div>
            </form>
     {/*   <p style={{color: "orangered"}}>{JSON.stringify(user)}</p> */}
            
            </Col>
            </Row>
            </Container>
        </div>
    )
}