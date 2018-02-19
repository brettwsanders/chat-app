import * as types from './actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return {
                ...state,
                message: action.message
            };
         default:
            return state;
    }
};

export default reducer;
