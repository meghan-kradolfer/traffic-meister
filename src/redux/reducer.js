const initialState = {
  vehicles: [],
  vehicleTypes: [],
  type: false,
  brand: false,
  color: false
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        vehicles: action.data,
        vehicleTypes: action.data.filter(function (pair) {
          return (this[pair['type']] = (this[pair['type']] || 0) + 1) === 1;
        }, {})
      };
    default:
      return state;
  }
};

export default data;