import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Header = () => {
  return (
    <div className="content">
      <div className="content-inner">
       <Row>
         <Col md={6} >
           <h1>Trafficmeister</h1>
          </Col>
         <Col md={6} >
           image
         </Col>
       </Row>
      </div>
    </div>
  )
};
