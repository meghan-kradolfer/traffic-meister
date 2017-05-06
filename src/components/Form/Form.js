import React from 'react';
import './Form.css';

export const Form = (props) => {
  const { allTypes, allBrands, allColors, type, brand, color } = props.data;
    return (
    <form className="content">
      <div className="content-inner">
          <div className="Form-row">
              <label htmlFor="type" className="Form-label">vehicle</label>
              <select id="type" value={type} onChange={props.handleSelectChange} className="Form-select">
                  <option value=''>Select...</option>
                  { Object.keys(allTypes).map(function(keyName, keyIndex) {
                      if((!brand || allTypes[keyName].brand.indexOf(brand) !== -1) && (!color || allTypes[keyName].colors.indexOf(color) !== -1)) {
                          return <option key={keyIndex} value={keyName}>{keyName}</option>
                      }
                  }) }
              </select>
          </div>
          <div className="Form-row">
          <label htmlFor="brand" className="Form-label">brand</label>
          <select id="brand" value={brand} onChange={props.handleSelectChange} className="Form-select">
              <option value=''>Select...</option>
              { Object.keys(allBrands).map(function(keyName, keyIndex) {
                  if((!type || allBrands[keyName].type.indexOf(type) !== -1) && (!color || allBrands[keyName].colors.indexOf(color) !== -1)) {
                      return  <option key={keyIndex} value={keyName} >{keyName}</option>
                  }
              }) }
          </select>
          </div>
          <div className="Form-row">
          <label htmlFor="color" className="Form-label">color</label>
          <select id="color" value={color} onChange={props.handleSelectChange} className="Form-select">
              <option value=''>Select...</option>
              { Object.keys(allColors).map(function(keyName, keyIndex) {
                  if((!brand || allColors[keyName].brand.indexOf(brand) !== -1) && (!type || allColors[keyName].type.indexOf(type) !== -1)) {
                      return <option key={keyIndex} value={keyName}>{keyName}</option>
                  }
              }) }
          </select>
          </div>
      </div>
    </form>
  )
};
