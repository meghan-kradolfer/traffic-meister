import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SideBar.css';

export const SideBar = (props) => {
  const { data, brand, color, vehicle } = props.data;
  return (
    <div className="content">
      <div className="content-inner">
        <Row>
            { data.map(veh => (
                <Col md={4} sm={3} xs={4} key={veh.id} className="mb-2">
                    <div style={{backgroundImage: `url(${veh.img})`}}
                        className={`SideBar-img  ${(!vehicle || veh.type === vehicle) && (!brand || veh.brand === brand) && (!color || veh.colors.indexOf(color) !== -1) ? 'active' : ''}`}>
                    </div>
                </Col>
            ))}
        </Row>
      </div>
    </div>
  )
};
