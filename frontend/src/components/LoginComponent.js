import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';

import { BiHide } from 'react-icons/bi';

import '../CSS/loginstyle.css';
import NavbarComponent from './NavbarComponent';

export default function LoginComponent() {
  const init = {
    uid: '',
    pwd: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'reset':
        return init;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();

    if (!info.uid || !info.pwd) {
      setMsg('Enter user ID and password first');
      return;
    }

    const reqOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info),
    };

    fetch('http://localhost:8080/chklogin', reqOptions)
      .then((resp) => {
        if (resp.ok) {
          return resp.text();
        } else {
          throw new Error('server error');
        }
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        console.log(obj)
        if (Object.keys(obj).length === 0) {
          setMsg('Wrong user ID and password');
        } else {
          localStorage.setItem('loggedstatus', 1);
          localStorage.setItem('loggedinfo', JSON.stringify(obj));
          console.log(JSON.stringify(obj));

          if (obj.status === 0) {
            alert('Request has not been approved');
          } else {
            if (obj.role_id.role_id === 1) {
              localStorage.setItem('user_id', obj.uid);
              navigate('/admin_home');
            } else if (obj.role_id.role_id === 2) {
              localStorage.setItem('user_id', obj.uid);
              navigate('/guide_home');
            } else if (obj.role_id.role_id === 3) {
              localStorage.setItem('user_id', obj.uid);
              navigate('/trekker_home');
            }
          }
        }
      })
      .catch((error) => alert('Server error. Please try again later.'));
  };

  const gotoforget = () => {
    navigate('/forget');
  };

  const gotoHome = () => {
    navigate('/');
  };

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  return (
    <div>
        <NavbarComponent/>
    <div className="c-loginbox c-login">
      <div className="login">
        <h1>Login Form</h1>
        <form>
          <input
            type="text"
            placeholder="User ID"
            name="uid"
            id="uid"
            value={info.uid}
            onChange={(e) => {
              dispatch({ type: 'update', fld: 'uid', val: e.target.value });
              setMsg(''); // Clear error message
            }}
          />
          <div className="form-text">Enter User ID</div>

          <input
            type={passwordType}
            className="form-control"
            placeholder="Password"
            name="pwd"
            id="pwd"
            value={info.pwd}
            onChange={(e) => {
              dispatch({ type: 'update', fld: 'pwd', val: e.target.value });
              setMsg(''); // Clear error message
            }}
          />
          <div className="form-text">Enter Password</div>
          <button className="btn btn-outline-primary" type="button" onClick={togglePassword}>
            <BiHide />
          </button>

          <p className="msg">{msg}</p>

          <input type="reset" id="btn" onClick={() => dispatch({ type: 'reset' })} />
          <button type="submit" id="btn" onClick={(e) => sendData(e)}>
            Login
          </button>
        </form>
      </div>
      <div className="c-forgethomebtndiv">
        <button className="c-forgetbtn" onClick={() => gotoforget()}>
          Forget Password
        </button>
        <button className="c-forgetbtn" onClick={() => gotoHome()}>
          Home
        </button>
      </div>
    </div>
    </div>
  );
}
