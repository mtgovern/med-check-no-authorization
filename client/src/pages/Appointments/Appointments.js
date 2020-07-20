import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Col, Row } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import AddApptBtn from '../../components/AddApptBtn';

function Notes(props) {
	if (!props.notes) {
		return null;
	}

	return (
		<Row>
			<Col size="md-12">
				NOTES: {props.notes}
			</Col>
		</Row>
	);
}

function Doctor(props) {
	if (!props.doctor) {
		return null;
	}

	return (
		<Row>
			<Col size="md-12">
				DOCTOR: {props.doctor}
			</Col>
		</Row>
	);
}

function Times(props) {
	console.log(props);
	if ((!props.apptstart) && (!props.apptend)) {
		return null;
	}

	if ((props.apptstart) && (!props.apptend)) {
		return (
			<Row>
				<Col size="md-12">
					TIME: {props.apptstart}
				</Col>
			</Row>);
	} else {
		return (
			<Row>
				<Col size="md-12">
					TIME: {props.apptstart} - {props.apptend}
				</Col>
			</Row>);
	};
}

 

function Appointments() {
	const [appts, setAppts] = useState([]);

	useEffect(() => {
		loadAppts()
	}, [])

	function deleteAppt(id) {
		API.deleteAppts(id)
			.then(res => loadAppts())
			.catch(err => console.log(err));
	}
	function loadAppts() {
		API.getAppts()
			.then(res =>
				setAppts(res.data)
			)
			.catch(err => console.log(err));
	};
	return (
		<div>
			<div
				style={{
					height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
				}} id="m3">
				<p>APPOINTMENTS</p>
			</div>
			<div className="text">
				<div className="medList">
					{appts.length ? (
						appts.map(appt => (
							<div className="outer border rounded" key={appt._id}>
								<Row>
									<Col size="md-12">
										<button onClick={() => deleteAppt(appt._id)} className="btn delete btn-danger">Delete</button>
									</Col>
								</Row>
								<Row>
									<Col size="md-12">
										PURPOSE: {appt.purpose}
									</Col>
								</Row>
								<Row>
									<Col size="md-12">
										DATE: {appt.apptdate}
									</Col>
								</Row>
								<Times apptstart={appt.apptstart} apptend={appt.apptend} />
								<Doctor doctor={appt.doctor} />
								<Notes notes={appt.notes} />
							</div>))) : (<h4>No Results to Display</h4>)}
					<div>
					</div>
				</div>
			</div>
			<Row>
				<Col size="md-12">
					<AddApptBtn />
					<HomeButton />
				</Col>
			</Row>
		</div>
	)
}

export default Appointments;

