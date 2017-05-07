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
        const { loaded, vehicle, brand, color } = this.props;
        return (
            <Grid>
              <Header />
                { !loaded &&
                <img src={loading} className="App-loading" alt="Trafficmeister loading"/>
                }
                { loaded &&
                <Row>
                  <Col sm={6} className="mt-1">
                    <Form data={ this.props } handleSelectChange={this.handleSelectChange}/>
                  </Col>
                  <Col sm={6} className="mt-1">
                    <SideBar data={ this.props } />
                  </Col>
                    <Col sm={12} className="mt-1 mb-1">
                        <div className="content">
                            <div className="content-inner">
                                <Row className="App-summary" >
                                    <Col sm={4}>
                                        <h4 >Vehicle: <span>{vehicle ? vehicle : 'not selected'}</span> </h4>
                                    </Col>
                                    <Col sm={4}>
                                        <h4>Brand: <span>{brand ? brand : 'not selected'}</span> </h4>
                                    </Col>
                                    <Col sm={4}>
                                        <h4>Color: <span>{color ? color : 'not selected'}</span> </h4>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                }
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
