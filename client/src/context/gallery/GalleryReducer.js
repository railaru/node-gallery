import {
    GET_ITEMS,
    GET_ITEM,
    SET_ITEM_ID
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
        default:
            return state;
    }
};
