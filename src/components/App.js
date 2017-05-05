import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { dispatchGetData, addField }  from '../redux/action';
import { Header } from './Header/Header';
import { Form } from './Form/Form';
import { SideBar } from './SideBar/SideBar';
import './App.css';

const mapStateToProps = (state) => {
  return {
    vehicles: state.data.vehicles,
    vehicleTypes: state.data.vehicleTypes,
    vehicleBrands: state.data.vehicleBrands,
    vehicleColors: state.data.vehicleColors,
    type: state.data.type,
    brand: state.data.brand,
    color: state.data.color,
    loaded: state.data.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetData: () => {
      dispatch(dispatchGetData())
    },
    addField: (field, value) => {
      dispatch(addField(field, value))
    }
  }
};

class App extends Component {
  componentWillMount() {
    this.props.dispatchGetData();
  }
  handleSelectChange = (evt) => {
    this.props.addField(evt.target.id, evt.target.value);
  };
  render() {
    const { loaded } = this.props;
    return (
      <Grid>
        <Header />
        { !loaded &&
          <p>...loading</p>
        }
        { loaded &&
        <Row>
          <Col md={6} >
            <Form data={ this.props } handleSelectChange={this.handleSelectChange}/>
          </Col>
          <Col md={6} >
            <SideBar data={ this.props } />
          </Col>
        </Row>
        }
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
