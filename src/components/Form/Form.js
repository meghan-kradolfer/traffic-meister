import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './Form.css';

function removeDups(a, b) {
  return a.filter(function (pair) {
    return b ? (this[pair[b]] = (this[pair[b]] || 0) + 1) === 1 : (this[pair] = (this[pair] || 0) + 1) === 1
  }, {});
}

function FieldGroup({ id, label, options, onChange, props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel> {props.data[id]}
      <FormControl componentClass="select" onChange={onChange}>
        <option value=''>Select... {props.data[id]}</option>
        { options.map((option, key) => (
          <option value={ option[id] ? option[id] : option } key={key} >{ option[id] ? option[id] : option }</option>
        ))}
      </FormControl>
    </FormGroup>
  );
}

export const Form = (props) => {
  const { vehicles, vehicleTypes, vehicleBrands, vehicleColors, type, brand, color } = props.data;
  return (
    <form className="content">
      <div className="content-inner">
        <FieldGroup
          id="type"
          label="vehicle"
          options={ vehicleTypes.filter(vehicle => (!brand || vehicle.brand === brand) && (!color|| vehicle.colors.indexOf(color) !== -1) ) }
          onChange={props.handleSelectChange}
          props={props}
        />
        <FieldGroup
          id="brand"
          label="brand"
          options={vehicleBrands.filter(vehicle => (!type || vehicle.type === type) && (!color|| vehicle.colors.indexOf(color) !== -1) )}
          onChange={props.handleSelectChange}
          props={props}
        />
        <FieldGroup
          id="color"
          label="color"
          options={vehicleColors.filter(vehicle => (!type || vehicle.type === type) && (!brand || vehicle.brand === brand))}
          onChange={props.handleSelectChange}
          props={props}
        />
      </div>
    </form>
  )
};
