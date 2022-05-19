/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";



function Login() {

  const [user, setUser] = useState({ cin: "", password: "" });

  let navigate = useNavigate()

  const { cin, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5000/api/v1/auth/login", user).then(result => {
        localStorage.setItem('role', result.data.user.roles);
        localStorage.setItem('dep', result.data.user.dep);
        localStorage.setItem('user', JSON.stringify(result.data.user));
        localStorage.setItem('userid', JSON.stringify(result.data.user.cin));

        //console.log(role);	
        //     localStorage.setItem('cin', result.data.user.cin);

        const user = localStorage.getItem('user')
        const role = localStorage.getItem('role')
        const dep = localStorage.getItem('dep')
        const userid = localStorage.getItem('userid')

        //  	const cin = localStorage.getItem('cin')


        console.log(userid)
      })
        .then(() => {
          navigate('/../Home', { replace: true })
          navigate(0)
        })
    }
    catch (err) {
      console.log(err)
    }
  };


  return (

    <div className="loginpage">
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <div
                className="img-fluid" />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div class="form-outline mb-4">
                  <input type="number" id="form1Example13" class="form-control form-control-lg" placeholder="Enter your id number"
                    name="cin"
                    value={cin}
                    onChange={(e) => onInputChange(e)} />
                  <label class="form-label" for="form1Example13">cin number</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form1Example23" class="form-control form-control-lg" placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)} />
                  <label class="form-label" for="form1Example23">Password</label>
                </div>


                <button type="submit" class="btn btn-danger btn-lg btn-block" onClick={(e) => submitLogin(e)}
                  disabled={!password.length || !cin.length}>Login</button>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">Welcome Back!</p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;