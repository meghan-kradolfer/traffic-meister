const initialState = {
  data: false
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return 'dsad';
    default:
      return state;
  }
};

export default data;

// const getData = () => {
//   return {
//     type: 'GET_DATA'
//   }
// };

export const dispatchGetData = () => {
  return {
    type: 'GET_DATA'
  }
};