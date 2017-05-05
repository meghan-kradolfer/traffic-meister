import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './Form.css';

function FieldGroup({ id, label, options, name, onChange }) {
  console.log(options);
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
  const { vehicleTypes, vehicleBrands, vehicleColors, type, brand, color } = props.data;
  console.log(brand);
  return (
    <form className="content">
      <div className="content-inner">
        <FieldGroup
          id="type"
          label="vehicle"
          options={ vehicleTypes.filter(vehicle => (!brand || vehicle.brand === brand) && (!color|| vehicle.colors.indexOf(color) !== -1)) }
          name="type"
          onChange={props.handleSelectChange}
        />
        <FieldGroup
          id="brand"
          label="brand"
          options={vehicleBrands.filter(vehicle => (!type || vehicle.type === type) &&  (!color || vehicle.colors.indexOf(color) !== -1))}
          name="brand"
          onChange={props.handleSelectChange}
        />
        <FieldGroup
          id="color"
          label="color"
          options={vehicleColors.filter(vehicle => (!type || vehicle.type === type) && (!brand || vehicle.brand === brand))}
          name="colors"
          onChange={props.handleSelectChange}
        />
      </div>
    </form>
  )
};
