import React, { useState } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import HomeButton from '../../components/HomeButton';
import BackBtn from '../../components/BackBtn';
import API from '../../utils/API';
import { Toast } from 'react-bootstrap';

function AddMedForm() {
  const [medName, setMedName] = useState('');
  const [dosage, setDosage] = useState('');
  const [timeToTake, setTime] = useState('');
  const [purpose, setPurpose] = useState('');
	const [prescribingDoc, setDoctor] = useState('');
	const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');
  const toggleShowToast = () => setShowToast(!showToast);
  let passed = true;

  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    console.log(e.target);
    // Call fetch books async function
    saveMeds();
  }

  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'medname') { 
      setMedName(value)
    } else if (name === 'dosage') {
      setDosage(value);
    } else if (name === 'timetotake') {
      setTime(value);
    } else if (name === 'purpose') {
      setPurpose(value);
    } else if (name === 'prescribingdoc') {
      setDoctor(value);
    }
  }

  function saveMeds() {
    if (!medName) {
			passed = false;
			setToastText('Please enter Medication Name');
      toggleShowToast();
    } else if (!dosage) {
			passed = false;
			setToastText('Please enter Dosage');
      toggleShowToast();
    } else if (!timeToTake) {
			passed = false;
			setToastText('Please enter a time to take');
      toggleShowToast();
    }

    if (passed) {
      API.saveMeds({
        medname: medName,
        dosage: dosage,
        timetotake: timeToTake,
        purpose: purpose, 
        prescribingdoc: prescribingDoc
      })
      .then(results => {
        //console.log(results);
        setMedName('');
        setDosage('');
        setTime('');
        setPurpose('');
        setDoctor('');
        passed = true;
      })
      // .then(res => loadBooks())
      .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m1"
      >
        <p>Add Medication</p>
      </div>
			<Toast style={{ backgroundColor: '#F8B71E' }} show={showToast} onClose={toggleShowToast}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{toastText}</Toast.Body>
              </Toast>
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
            <label>Medication Name</label>
              <Input
                value={medName}
                name='medname'
                onChange={onInputChange}
                type='text'
                placeholder='Medication Name (required)'
              />
               <label>Enter Dosage</label>
              <Input
                value={dosage}
                name='dosage'
                onChange={onInputChange}
                type='text'
                placeholder='Add Dosage (required)'        
              />
              <label>Enter Time To Take </label>
              <Input
                value={timeToTake}
                name='timetotake'
                onChange={onInputChange}
                type='text'
                placeholder='AM/PM (required)'
              />
              <label>Reason For Taking Medication</label>
              <Input
                value={purpose}
                name='purpose'
                onChange={onInputChange}
                type='text'
                placeholder='Medication Purpose (required)'
              />
               <label>Prescribing Doctor</label>
              <Input
                value={prescribingDoc}
                name='prescribingdoc'
                onChange={onInputChange}
                type='text'
                placeholder='Prescribing Doctor'
              />
              <FormBtn className='btn-med' onClick={onSubmitHandler}>Submit Medication Info</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col size="md-12">
        <BackBtn />
        <HomeButton />
        </Col>
      </Row>
    </div>
  );
}

export default AddMedForm;