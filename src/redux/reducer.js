const initialState = {
    data: [],
    allVehicles: {},
    allBrands: {},
    allColors: {},
    vehicle: false,
    brand: false,
    color: false,
    loaded: false
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            const { allVehicles, allBrands, allColors } = state;
            action.data.map(veh => {
                if(!allVehicles[veh.type]) {
                    allVehicles[veh.type] = {
                        brand: [veh.brand],
                        colors: veh.colors.map(color => color)
                    };
                } else {
                    allVehicles[veh.type].brand.push(veh.brand);
                    veh.colors.map(color => allVehicles[veh.type].colors.push(color));
                }
                return action.data;
            });
            action.data.map(veh => {
                if(!allBrands[veh.brand]) {
                    allBrands[veh.brand] = {
                        vehicle: [veh.type],
                        colors: veh.colors.map(color => color)
                    };
                } else {
                    allBrands[veh.brand].vehicle.push(veh.type);
                    veh.colors.map(color => allBrands[veh.brand].colors.push(color));
                }
                return action.data;
            });
            action.data.map(veh => {
                veh.colors.map(color => {
                    if(!allColors[color]) {
                        allColors[color] = {
                            vehicle: [veh.type],
                            brand: [veh.brand]
                        };
                    } else {
                        allColors[color].vehicle.push(veh.type);
                        allColors[color].brand.push(veh.brand);
                    }
                    return veh.colors;
                });
                return action.data;
            });
            return {
                ...state,
                data: action.data,
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