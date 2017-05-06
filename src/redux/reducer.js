const initialState = {
    allVehicles: [],
    allTypes: {},
    allBrands: {},
    allColors: {},
    type: false,
    brand: false,
    color: false,
    loaded: false
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            const { allTypes, allBrands, allColors } = state;
            action.data.map(veh => {
                if(!allTypes[veh.type]) {
                    allTypes[veh.type] = {
                        brand: [veh.brand],
                        colors: veh.colors.map(color => color)
                    };
                } else {
                    allTypes[veh.type].brand.push(veh.brand);
                    veh.colors.map(color => allTypes[veh.type].colors.push(color));
                }
            });
            action.data.map(veh => {
                if(!allBrands[veh.brand]) {
                    allBrands[veh.brand] = {
                        type: [veh.type],
                        colors: veh.colors.map(color => color)
                    };
                } else {
                    allBrands[veh.brand].type.push(veh.type);
                    veh.colors.map(color => allBrands[veh.brand].colors.push(color));
                }
            });
            action.data.map(veh => {
                veh.colors.map(color => {
                    if(!allColors[color]) {
                        allColors[color] = {
                            type: [veh.type],
                            brand: [veh.brand]
                        };
                    } else {
                        allColors[color].type.push(veh.type);
                        allColors[color].brand.push(veh.brand);
                    }
                });
            });
            return {
                ...state,
                allVehicles: action.data,
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