import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,
} from '../actions'


const initialState = {
    smurfs: [{"name": "Brainey", "age": 200, "height": "5cm", "id": 0},],
    smurfsLoading: false,
    isLoading: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START:
            return {
                ...state, smurfsLoading: true, error: ""
            };
        case GET_SMURFS_SUCCESS:
            return {
                ...state, smurfs: action.payload, smurfsLoading: false, error: ""
            };

        case ADD_SMURF_START:
            return {
                ...state, isLoading: true, error: ""
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state, smurfs: action.payload, isLoading: false, error: ""
            };
        default:
            return state;
    }
};