import React, { useReducer } from 'react';
import axios from 'axios';
import GalleryContext from './GalleryContext';
import GalleryReducer from './GalleryReducer';
import {
    GET_ITEMS,
    SET_LOADING
} from '../types';


const GalleryState = props => {
    const initialState = {
        galleryItems: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GalleryReducer, initialState);

    // Get gallery items
    const getItems = async () => {
        setLoading();

        const res = await axios.get(
            `http://localhost:5000/api/items`
        );

        dispatch({
            type: GET_ITEMS,
            payload: res.data
        });
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GalleryContext.Provider
            value={{
                galleryItems: state.galleryItems,
                loading: state.loading,
                getItems
            }}
        >
            {props.children}
        </GalleryContext.Provider>
    );

};

export default GalleryState;
