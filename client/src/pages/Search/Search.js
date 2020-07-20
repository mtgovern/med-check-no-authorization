import React from 'react';
import SearchForm from '../../components/SearchForm';
// import Footer from '../../components/Footer';
import HomeButton from '../../components/HomeButton';
import { Col, Row } from "../../components/Grid";

function SearchMed() {
  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m1"
      ><p>MEDICATIONS</p>
      </div>
      <Row>
        <Col size="md-12">
          <SearchForm />
          <HomeButton />
        </Col>
      </Row>
    </div>
  );
}

export default SearchMed;


