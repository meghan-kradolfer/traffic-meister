import trafficMeister from '../lib/service';

const getData = (data) => {
  return {
    type: 'GET_DATA',
    data
  }
};

export const addField = (field, value) => {
  return {
    type: 'ADD_FIELD',
    field,
    value
  }
};

export const dispatchGetData = () => {
  return dispatch => {
    return trafficMeister
      .fetchData((err, data) => {
        return dispatch(getData(data))
      })
  };
};