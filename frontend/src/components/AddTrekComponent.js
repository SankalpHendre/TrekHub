import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useReducer, useState } from 'react';
import "../CSS/Style.css"

export default function AddTrekComponent() {

  const init = {
    "trek_name": "",
    "duration": "",
    "capacity": "",
    "description": "",
    "location": "",
    "level": ""
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;
    }
  }
  const [info, dispatch] = useReducer(reducer, init);
  const [file, setFile] = useState();
  const [trekid, settrekid] = useState(0);
  const [capacityError, setCapacityError] = useState("");

  const sendDatapack = (e) => {
    e.preventDefault();

    if (capacityError) {
      alert("Please fix the form errors before submitting.");
      return;
    }

    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    }

    fetch("http://localhost:8080/addtrek", reqOptions)
      .then(resp => {
        if (resp.ok) {
          return resp.text();
        } else {
          throw new Error("server error")
        }
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (obj) {
          settrekid(obj.trek_id);
          alert("successfully added package" + obj.trek_id);
        } else {
          alert("failure, try again");
        }
      })
      .catch((error) => alert("server error try after some time"));
  }

  const sendDataimg = (e) => {
    e.preventDefault();

    console.log('File:', file);
    console.log('Trek ID:', trekid);

    if (file && trekid) {
      const formData = new FormData();
      formData.append('file', file);

      const reqOptions = {
        method: 'POST',
        body: formData,
      };

      const uploadUrl = `http://localhost:8080/uploadimage/${trekid}`;
      console.log('Upload URL:', uploadUrl);

      fetch(uploadUrl, reqOptions)
        .then((resp) => {
          if (resp.ok) {
            return resp.text();
          } else {
            throw new Error('server error');
          }
        })
        .then((text) => {
          alert('Image uploaded successfully');
          // Clear the file input after successful upload
          setFile(null);
        })
        .catch((error) => alert('Error uploading image:', error));
    } else {
      alert('Please select an image and add trek data first.');
    }
  };

  return (
    <div>
      <div>
        <h3><b>ADD NEW TREK</b></h3>
      </div><br></br>
      <div className="d-flex justify-content-around">
        <Form>
          <Form.Group>
            <Form.Control
              className="mb-3"
              size="lg"
              type="text"
              placeholder="trek_name"
              name="trek_name"
              id="trek_name"
              onChange={(e) => { dispatch({ type: 'update', fld: "trek_name", val: e.target.value }) }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mb-3"
              size="lg"
              type="number"
              placeholder="capacity"
              name="capacity"
              id="capacity"
              onChange={(e) => {
                const capacityValue = parseInt(e.target.value);
                if (capacityValue >= 0) {
                  dispatch({ type: 'update', fld: 'capacity', val: capacityValue });
                  setCapacityError("");
                } else {
                  setCapacityError("Capacity cannot be negative");
                }
              }}
              required
            />
            {capacityError && <p className="text-danger">{capacityError}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mb-3"
              size="lg"
              type="text"
              placeholder="duration"
              name="duration"
              id="duration"
              onChange={(e) => { dispatch({ type: 'update', fld: "duration", val: e.target.value }) }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mb-3"
              size="lg"
              type="text"
              placeholder="description"
              name="description"
              id="description"
              onChange={(e) => { dispatch({ type: 'update', fld: "description", val: e.target.value }) }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="mb-3"
              size="lg"
              type="text"
              placeholder="locations"
              name="location"
              id="location"
              onChange={(e) => { dispatch({ type: 'update', fld: "location", val: e.target.value.toLowerCase() }) }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              size="lg"
              name="level"
              id="level"
              onChange={(e) => { dispatch({ type: 'update', fld: "level", val: e.target.value }) }}
              required
            >
              <option value="">Select level</option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => { sendDatapack(e) }}
          >
            Click here to Add TREK
          </Button>
        </Form>
        <Form>
          <Form.Group>
            <Form.Control
              className="mb-3"
              size="lg"
              type="file"
              placeholder="packageimages"
              name="packageimages"
              id="packageimages"
              onChange={(e) => { setFile(e.target.files[0]) }}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => { sendDataimg(e) }}
          >
            Click here to Add Trek Images
          </Button>
        </Form>
      </div>
    </div>
  );
}