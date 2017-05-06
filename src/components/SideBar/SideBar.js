import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SideBar.css';

export const SideBar = (props) => {
  const { type, brand, color, allVehicles } = props.data;
  return (
    <div className="content">
      <div className="content-inner">
        <Row>
            { allVehicles.map(vehicle => (
                <Col md={3} key={vehicle.id} className={`SideBar-img ${(!type || vehicle.type === type) && (!brand || vehicle.brand === brand) && (!color || vehicle.colors.indexOf(color) !== -1) ? 'active' : ''}`}>
                  <img src={vehicle.img} alt={`${vehicle.type}, ${vehicle.brand}`} />
                </Col>
            ))}
        </Row>
      </div>
    </div>
  )
};
