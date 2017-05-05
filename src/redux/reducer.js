const initialState = {
  vehicles: [],
  vehicleTypes: [],
  loaded: false
};

function removeDups(a, b) {
  return a.filter(function (pair) {
    return b ? (this[pair[b]] = (this[pair[b]] || 0) + 1) === 1 : (this[pair] = (this[pair] || 0) + 1) === 1
  }, {});
}

export const data = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      let colors = [];
      action.data.map(data => {
        data.colors.map(color => {
          colors.push(color);
        })
      });
      return {
        ...state,
        vehicles: action.data,
        vehicleTypes: removeDups(action.data, 'type'),
        vehicleBrands: removeDups(action.data, 'brand'),
        vehicleColors: removeDups(colors, null),
        loaded: true
      };
    case 'ADD_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    default:
      return state;
  }
};

export default data;