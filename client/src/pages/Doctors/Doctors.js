import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Col, Row } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import AddDocBtn from '../../components/AddDocBtn';

function AddressLine2(props) {
  if (!props.addressTwo) {
    return null;
  }

  return (
    <Row>
      <Col size="md-12">ADDRESS LINE 2: {props.addressTwo} </Col >
    </Row>
  );
}

function Specialty(props) {
  if (!props.specialty) {
    return null;
	}

  return (
    <Row>
    <Col size="md-12">SPECIALTY: {props.specialty}</Col>
  </Row>
  );
}

function Doctors() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    loadDocs()
  }, [])

  function deleteDoc(id) {
    API.deleteDocs(id)
      .then(res => loadDocs())
      .catch(err => console.log(err));
  }
  function loadDocs() {
    API.getDocs()
      .then(res =>
        setDocs(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>DOCTORS</p>
      </div>
      <div className="text">
        <div className="medList">
          {docs.length ? (
            docs.map(doc => (
              <div className="outer border rounded" key={doc._id}>
                <Row>
                  <Col size="md-12">
                    <button onClick={() => deleteDoc(doc._id)} className="btn delete">Delete</button>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12"><b>DOCTOR:</b> {doc.name}</Col>
                </Row>
                <Row>
                  <Col size="md-12"><b>PHONE:</b> {doc.phone}</Col>
                </Row>
                <Row>
                  <Col size="md-12"><b>ADDRESS LINE 1:</b> {doc.address}</Col>
                </Row>
                <AddressLine2 addressTwo={doc.address2} />
                <Row>
                  <Col size="md-12" ><b>CITY:</b> {doc.city}</Col>
                </Row>
                <Row>
                  <Col size="md-12" ><b>STATE:</b> {doc.state}</Col>
                </Row>
                <Row>
                  <Col size="md-12" ><b>ZIP CODE:</b> {doc.zipcode}</Col>
                </Row>
                <Specialty specialty={doc.specialty} />
              </div>
            ))) : (<h4>No Results to Display</h4>)
          }
        </div>

      </div>
      <Row>
        <Col size="md-12">
          <AddDocBtn />
          <HomeButton />
        </Col>
      </Row>
    </div>
  );
}

export default Doctors;



