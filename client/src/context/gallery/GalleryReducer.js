import {
    GET_ITEMS,
    GET_ITEM
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                galleryItems: action.payload,
                loading: false
            };
        case GET_ITEM:
            return {
                ...state,
                galleryItem: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
