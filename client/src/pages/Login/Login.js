import React, { useState } from 'react';
import { Input } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

		const onInputChange = (event) => {
    const value = event.target.value;
		const name = event.target.name;
		
    if (name === 'email') { 
			console.log(value);
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
		} 
		
  }
	
	const submitLogin = (e) => {
		e.preventDefault();
		console.log("email" + email);
		console.log(password);
		API.getLogin({
				email: email,
				password: password
			})
			.then(results =>{
				console.log(results);
				if (results.config.password === password){
					
				}
				window.location.href="/home";
			})
			.catch(err => console.log(err));
	 
	}

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>LOGIN</p>
      </div>
			<div className="mt-5">
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
            <label >Email Address</label>
              <Input
                value={email}
                name='email'
                onChange={onInputChange}
								type='email'
								placeholder='Email (required)'
              />  
							
							
            <label>Password</label>
              <Input
                name='password'
                placeholder='password'
                value={password}
                onChange={onInputChange}
								type='text'
              />
							
							<button 
								type="submit" 
								className="btn btn-success"
								onClick={submitLogin}>
                Log In
								</button>
								{/* <Link to="/home"><button type="button" className="homeBtn"> Home </button></Link> */}
								
            </form>
          </Col>
        </Row>
        <Row>
          <Col size='md-12'>
             Don't Have An Account? 
            <p><a href= "/signup" className="clicktosignup">Click here to sign-up.</a></p> 
          </Col>
        </Row>
      </Container>
			</div>
    </div>
  );
}

export default Login;