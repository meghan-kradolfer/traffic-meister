import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './Form.css';

function FieldGroup({ id, label, options, name, onChange }) {
  const optionValid = options && options.length;
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      { optionValid &&
      <FormControl componentClass="select" onChange={onChange}>
        <option value=''>Select...</option>
        { options.map((option, key) => (
          <option value={ option[name] ? option[name] : option } key={key} >{ option[name] ? option[name] : option }</option>
        ))}
      </FormControl>
      }
      { !optionValid &&
      <FormControl componentClass="select" disabled>
        <option value=''>Select...</option>
      </FormControl>
      }
    </FormGroup>
  );
}

export const Form = (props) => {
  const { vehicleTypes, vehicles, type, brand } = props.data;
  return (
    <form className="content">
      <div className="content-inner">
        <FieldGroup
          id="type"
          label="vehicle"
          options={ vehicleTypes }
          name="type"
          onChange={props.handleSelectChange}
        />
        <FieldGroup
          id="brand"
          label="brand"
          options={vehicles.filter(vehicle => vehicle.type === type)}
          name="brand"
          onChange={props.handleSelectChange}
        />
        <FieldGroup
          id="color"
          label="color"
          options={vehicles.filter(vehicle => vehicle.brand === brand).map(col => col.colors)[0]}
          name="colors"
          onChange={props.handleSelectChange}
        />
      </div>
    </form>
  )
};
