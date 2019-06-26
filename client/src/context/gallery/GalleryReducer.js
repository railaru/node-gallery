import {
    GET_ITEMS
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case GET_ITEMS:

            return {
                ...state,
                galleryItems: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
