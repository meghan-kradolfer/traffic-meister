import React from 'react';
import { Row, Col } from 'react-bootstrap';
import trafficmeister from '../../assets/trafficmeister.png';
import './Header.css';

export const Header = () => {
  return (
  <Row className="Header">
      <Col xs={12} className="mt-1">
          <div className="content">
              <div className="content-inner">
                  <h1>Trafficmeister</h1>
                  <svg className="Header-svg" viewBox="0 0 410.495 11.188">
                      <polygon points="410.495,11.188 11.614,10.857 0,0 398.88,0.332 "/>
                  </svg>
                  <img src={trafficmeister} alt="Trafficmeister logo" className="Header-logo" />
              </div>
          </div>
      </Col>
  </Row>
  )
};
