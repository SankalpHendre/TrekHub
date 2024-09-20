import React, { useEffect, useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PlanTrekComponent1() {
    const [guideIds, setGuideIds] = useState([]);
    const [trekIds, setTrekIds] = useState([]);
    // const [isEndDateValid, setIsEndDateValid] = useState(true);
    const[isStartDateValid,setIsStartDateValid] =useState(true);
    const[isLastDateValid,setIsLastDateValid] =useState(true);


    useEffect(() => {
        fetch('http://localhost:8080/guides')
            .then(response => response.json())
            .then(data => {
                setGuideIds(data);
            })
            .catch(error => {
                console.error('Error fetching guides:', error);
            });
    }, []);

    

    useEffect(() => {
        fetch('http://localhost:8080/trekids')
            .then(response => response.json())
            .then(trekdata => {
                setTrekIds(trekdata);
            })
            .catch(error => {
                console.error('Error fetching trek IDs:', error);
            });
    }, []);

    const init = {
        start_date: "",
        // end_date: "",
        price: 0,
        avail_seats: 0,
        last_date_apply: "",
        guide_id: 0,
        trek_id: 0,
        status: "upcoming"
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                const newState = { ...state, [action.fld]: action.val };

                if (action.fld === 'start_date' && new Date(action.val) < new Date()) {
                    setIsStartDateValid(false);
                } else {
                    setIsStartDateValid(true);
                }

                // // Validate end date
                // if (action.fld === 'end_date' && new Date(newState.start_date) > new Date(action.val)) {
                //     setIsEndDateValid(false);
                // } else {
                //     setIsEndDateValid(true);
                // }

                if(action.fld=='last_date_apply' && new Date(newState.start_date)<new Date(action.val))
                {
                    setIsLastDateValid(false);
                }
                else{
                    setIsLastDateValid(true);
                }

                return newState;

            case 'reset':
                return init;

            default:
                return state;
        }
    };

    const [info, dispatch] = useReducer(reducer, init);
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();
         const reqOptions = {
        method : 'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify(info)
        
     }
     console.log(info);
     fetch("http://localhost:8080/addplantrek",reqOptions)
     .then(resp => {if(resp.ok)
                      { 
                        return resp.text();
                      }
                    else
                      {
                     
                        throw  new Error("server error")  
                      }
                    })
     .then(text => text.length ? JSON.parse(text):{})
     .then(obj => {
        if (obj) {
            alert("trek successfully plan");
            navigate("/admin_home");
        }
        else {
            alert("trek is not planned successfull ");
            navigate("plantrek");
        }
     })
    };


    return (
        <div>
            <div className="d-flex justify-content-around">
                <Form>
                    <Form.Control
                        className="mb-3"
                        size="lg"
                        as="select"
                        name="trek_id"
                        id="trek_id"
                        value={info.trek_id}
                        onChange={(e) => dispatch({ type: 'update', fld: "trek_id", val: e.target.value })}
                    >
                        <option value="">Select trek</option>
                        {trekIds.map(trek => (
                            <option key={trek.trek_id} value={trek.trek_id}>
                                {trek.trek_name}
                            </option>
                        ))}
                    </Form.Control>

                   <Form.Group>
                        <h5></h5>
                        <Form.Control
                              className="mb-3"
                              size="lg"
                              as="select"
                              name="guide_id"
                              id="guide_id"
                              value={info.guide_id} // Corrected value
                              onChange={(e) => dispatch({ type: 'update', fld: "guide_id", val: e.target.value })}
                          >
                              <option value="">Select guide</option>
                              {guideIds.map(guide => (
                                  <option key={guide.user_id} value={guide.user_id}>
                                      {guide.fname}
                                  </option>
                              ))}
                          </Form.Control>
                    </Form.Group>


<Form.Group>
    <h5>Start Date:</h5>
    <Form.Control
        className="mb-3"
        size="lg"
        type="date"
        placeholder="start_date"
        name="start_date"
        id="start_date"
        onChange={(e) => dispatch({ type: 'update', fld: "start_date", val: e.target.value })}
        required
    />
    {!isStartDateValid && (
        <p className="text-danger">Start date cannot be before the current date</p>
    )}
</Form.Group>

                    {/* <Form.Group>
                        <h5>end Date:</h5>
                        <Form.Control
                            className="mb-3"
                            size="lg"
                            type="date"
                            placeholder="end_date"
                            name="end_date"
                            id="end_date"
                            onChange={(e) => dispatch({ type: 'update', fld: "end_date", val: e.target.value })}
                            required
                        />
                        {!isEndDateValid && (
                            <p className="text-danger">End date must be after start date</p>
                        )}
                    </Form.Group> */}

                    <Form.Group>
                        <h5>Price:</h5>
                        <Form.Control
                            className="mb-3"
                            size="lg"
                            type="number"
                            name="price"
                            id="price"
                            onChange={(e) => dispatch({ type: 'update', fld: "price", val: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <h5>Capacity</h5>
                        <Form.Control
                            className="mb-3"
                            size="lg"
                            type="number"
                            name="avail_seats"
                            id="avail_seats"
                            onChange={(e) => dispatch({ type: 'update', fld: "avail_seats", val: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <h5>Last date apply:</h5>
                        <Form.Control
                            className="mb-3"
                            size="lg"
                            type="date"
                            placeholder="last_date_apply"
                            name="last_date_apply"
                            id="last_date_apply"
                            onChange={(e) => dispatch({ type: 'update', fld: "last_date_apply", val: e.target.value })}
                            required
                        />
                         {!isLastDateValid && (
        <p className="text-danger">Last date cannot be after the start date</p>
    )}
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" onClick={sendData}>
                        Click here to Plan Trek
                    </Button>

                    <div style={{ marginTop: '10px' }}>
                        <Link to="/admin_home" className="btn btn-secondary">
                            Close
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}