import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import API from "../../utils/API";

function Home() {
	const [isloggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {

  
		API.getUserData()
			.then(userdata =>{
				console.log(userdata.data);
				if (userdata.data.email === undefined) {
					window.location.href="/login";
				}
				console.log(userdata);
			})
			.catch(_ => {

			});
	}, [isloggedIn]);

	const submitHandle = (e) => {
		API.getLogout()
		.then(data => {
			// window.location.href="/login";
			setIsLoggedIn(true);
			console.log(data);
		})
		.catch(_ => {});
	}
	
  return (
    <Container fluid>
      <Row >
        <Col size="md-12" className="edges">
          <Link to="/medications"><button type="button" className="medications"> MEDICATIONS </button></Link>
          <Link to="/doctors"><button type="button" className="doctors"> DOCTORS </button></Link>
          <Link to="/appointments"><button type="button" className="appointments"> APPOINTMENTS </button></Link>
			 			<button type="button" className="appointments logout" onClick={submitHandle}> LOGOUT </button>
					
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
