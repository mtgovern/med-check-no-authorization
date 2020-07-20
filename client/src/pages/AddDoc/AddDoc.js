import React, { useState } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import RtnDocBtn from '../../components/RtnDocBtn';
import API from '../../utils/API';
import { Toast } from 'react-bootstrap';

function validatePhoneNo(phone)  {
  var phoneNumPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumPattern.test(phone);
}

function validateZipCode(zip) {
  var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
   return zipCodePattern.test(zip);
}

function AddDoc() {
  const [doctorname, setDoctor] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [addressone, setAddressOne] = useState('');
  const [addresstwo, setAddressTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
	const [zipcode, setZipCode] = useState('');
	const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');
  const toggleShowToast = () => setShowToast(!showToast);

  let passed = true;

  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    saveDocs();
  }

  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) 
    {
      case 'doctorname': 
      {
        setDoctor(value);
        break;
      }

      case 'specialty':
        {
          setSpecialty(value);
          break;
        } 

      case 'phonenumber':
        {
          setPhone(value);
          break;
        }  

      case 'addressone':
        {
          setAddressOne(value);
          break;
        }

        case 'addresstwo':
        {
          setAddressTwo(value);
          break;
        }

        case 'city':
          {
            setCity(value);
            break;
          }

        case 'state':
          {
            setState(value);
            break;
          }  

        case 'zipcode':
          {
            setZipCode(value);
            break;
          }  

        default:  
        {
          break;  
        }
    }
  }

  function saveDocs() {
    passed = true;
    if (!doctorname) {
			passed = false;
			setToastText(`Doctor's Name Required`);
      toggleShowToast();
    } else if (!phonenumber) {
			passed = false;
			setToastText(`Phone Number Required`);
      toggleShowToast();
    } else if (!addressone) {
			passed = false;
			setToastText(`Address Line One Required`);
      toggleShowToast();
    } else if (!city) {
			passed = false;
			setToastText(`City Required`);
      toggleShowToast();
    } else if (!state) {
			passed = false;
			setToastText(`State Required`);
      toggleShowToast();
    } else if (!zipcode) {
			passed = false;
			setToastText(`Zip Code Required`);
      toggleShowToast();
    }

    if (validateZipCode(zipcode)) {
      passed = true;
    } else {
			passed = false;
			setToastText(`Zip code is invalid`);
      toggleShowToast();
    }

    if (validatePhoneNo(phonenumber)) {
      passed = true;
    } else {
			passed = false;
			setToastText(`Phone number is invalid`);
      toggleShowToast();
    }

    if (passed) {
      API.saveDocs({
        name: doctorname,
        phone: phonenumber,
        address: addressone,
        address2: addresstwo,
        city: city,
        state: state,
        zipcode: zipcode,
        specialty: specialty
      })
        .then(results => {
          //console.log(results);
          setDoctor('');
          setSpecialty('');
          setPhone('');
          setAddressOne('');
          setAddressTwo('');
          setCity('');
          setState('');
          setZipCode('');
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
        id="m2" >
        <p>DOCTORS</p>
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
              <label>Doctor Name</label>
              <Input
                value={doctorname}
                name='doctorname'
                onChange={onInputChange}
                type='text'
                placeholder='Doctor Name (required)'
              />
              <label>Specialty</label>
              <Input
                name='specialty'
                placeholder='Specialty'
                value={specialty}
                onChange={onInputChange}
                type='text'
              />
              <label>Phone Number</label>
              <Input
                name='phonenumber'
                placeholder='Phone w/Area Code'
                value={phonenumber}
                onChange={onInputChange}
                type='text'
              />
              <label>Address Line One</label>
              <Input
                name='addressone'
                placeholder='Address Line One'
                value={addressone}
                onChange={onInputChange}
                type='text'
              />
              <label>Address Line Two</label>
              <Input
                name='addresstwo'
                placeholder='Address Line Two'
                value={addresstwo}
                onChange={onInputChange}
                type='text'
              />
              <label>City</label>
              <Input
                name='city'
                placeholder='City (Required)'
                value={city}
                onChange={onInputChange}
                type='text'
              />
              <label>State</label>
              <Input
                name='state'
                placeholder='State (Required)'
                value={state}
                onChange={onInputChange}
                type='text'
              />
              <label>Zip Code</label>
              <Input
                name='zipcode'
                placeholder='Zip Code (Required)'
                value={zipcode}
                onChange={onInputChange}
                type='text'
              />
              <FormBtn className='btn-doc' onClick={onSubmitHandler}>
                Submit Doctor Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col size="md-12">
          <RtnDocBtn />
          <HomeButton />
        </Col>
      </Row>
    </div>
  );
}

export default AddDoc;
