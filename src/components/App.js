import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { dispatchGetData, addField }  from '../redux/action';
import { Header } from './Header/Header';
import { Form } from './Form/Form';
import { SideBar } from './SideBar/SideBar';
import './App.css';
import loading from '../assets/loading.svg';

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        allVehicles: state.data.allVehicles,
        allBrands: state.data.allBrands,
        allColors: state.data.allColors,
        vehicle: state.data.vehicle,
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
                <img src={loading} className="App-loading" alt="Trafficmeister loading"/>
                }
                { loaded &&
                <Row className="mb-1">
                  <Col md={6} className="mt-1">
                    <Form data={ this.props } handleSelectChange={this.handleSelectChange}/>
                  </Col>
                  <Col md={6} className="mt-1">
                    <SideBar data={ this.props } />
                  </Col>
                </Row>
                }
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
