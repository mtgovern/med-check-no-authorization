import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Col, Row } from "../../components/Grid";
// import SearchButton from '../../components/SearchButton';
import HomeButton from '../../components/HomeButton';
import AddMedBtn from '../../components/AddMedBtn'

function Purpose(props) {
  if (!props.purpose) {
    return null;
  }

  return (
    <Row>
      <Col size="md-12">PURPOSE: {props.purpose}</Col>
    </Row>
  );
}

function Prescribing(props) {
  if (!props.prescribe) {
    return null;
  }

  return (
    <Row>
      <Col size="md-12" >DOCTOR: {props.prescribe}</Col>
    </Row>
  );
}

function Medications() {
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    loadMeds()
  }, [])

  function deleteMed(id) {
    API.deleteMeds(id)
      .then(res => loadMeds())
      .catch(err => console.log(err));
  }
  function loadMeds() {
    API.getMeds()
      .then(res =>
        setMeds(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m1"
      ><p>MEDICATIONS</p>
      </div>
      <div className="text">
        <div className="medList">
          {meds.length ? (
            meds.map(med => (
              <div className="outer border rounded" key={med._id}>
                <Row>
                  <Col size="md-12">
                    <button onClick={() => deleteMed(med._id)} className="btn delete">Delete</button>
                    {/* <button className="btn view btn-info">View</button> */}
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12"><b>MEDNAME:</b> {med.medname}</Col>
                </Row>
                <Row>
                  <Col size="md-12"><b>DOSAGE:</b>  {med.dosage}</Col>
                </Row>
                <Row>
                  <Col size="md-12"><b>AM/PM:</b>  {med.timetotake}</Col>
                </Row>
                <Purpose purpose={med.purpose} />
                <Prescribing prescribe={med.prescribingdoc} />
              </div>
            ))) : (<h4>No Results to Display</h4>)
          }
        </div>
      </div>
      <Row>
        <Col size="md-12">
          {/* <SearchButton /> */}
          <AddMedBtn />
          <HomeButton />
        </Col>
      </Row>
    </div>
  );
}

export default Medications;
