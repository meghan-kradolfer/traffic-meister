import React from 'react';
import './Form.css';

const renderSelect = (name, value, obj, vehicle, brand, color, handleChange) => (
    <div className="Form-row">
        <label htmlFor={name} className="Form-label">{name}</label>
        <select id={name} value={value} onChange={handleChange} className="Form-select">
            <option value=''>Select...</option>
            { Object.keys(obj).map(function(keyName, keyIndex) {
                if((!vehicle || obj[keyName].vehicle.indexOf(vehicle) !== -1) && (!brand || obj[keyName].brand.indexOf(brand) !== -1) && (!color || obj[keyName].colors.indexOf(color) !== -1)) {
                    return <option key={keyIndex} value={keyName}>{keyName}</option>
                } else {
                    return false
                }
            }) }
        </select>
    </div>
);

export const Form = (props) => {
  const { allVehicles, allBrands, allColors, vehicle, brand, color } = props.data;
    return (
    <form className="content">
      <div className="content-inner">
          {renderSelect('vehicle', vehicle, allVehicles, null, brand, color, props.handleSelectChange)}
          {renderSelect('brand', brand, allBrands, vehicle, null, color, props.handleSelectChange)}
          {renderSelect('color', color, allColors, vehicle, brand, null, props.handleSelectChange)}
      </div>
    </form>
  )
};
