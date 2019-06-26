import {
    GET_ITEMS,
    GET_ITEM,
    SET_ITEM_ID,
    SET_LOADING
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
        case SET_ITEM_ID:
            return {
                ...state,
                galleryItemId: action.payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
