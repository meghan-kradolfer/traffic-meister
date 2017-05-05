import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import trafficMeister from '../lib/service';
import { Header } from './Header/Header';
import { Form } from './Form/Form';
import { SideBar } from './SideBar/SideBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: [],
      vehicleTypes: [],
      loaded: false
    }
  }
  componentDidMount() {
    trafficMeister
      .fetchData((err, data) => {
        this.setState(
          {
            vehicles: data,
            vehicleTypes: data.filter(function (pair) {
              return (this[pair['type']] = (this[pair['type']] || 0) + 1) === 1;
            }, {}),
            loaded: true
          }
        )
      });
  }
  handleSelectChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value
    })
  };
  render() {
    const { loaded } = this.state;
    return (
      <Grid>
        <Header />
        { !loaded &&
          <p>...loading</p>
        }
        { loaded &&
        <Row>
          <Col md={6} >
            <Form data={ this.state } handleSelectChange={this.handleSelectChange}/>

          </Col>
          <Col md={6} >
            <SideBar data={ this.state } />
          </Col>
        </Row>
        }
      </Grid>
    );
  }
}

export default App;
