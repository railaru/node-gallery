import React, { useReducer } from 'react';
import axios from 'axios';
import GalleryContext from './GalleryContext';
import GalleryReducer from './GalleryReducer';
import {
    GET_ITEMS,
    GET_ITEM,
    SET_ITEM_ID,
    SET_LOADING
} from '../types';


const GalleryState = props => {
    const initialState = {
        galleryItems: [],
        galleryItem: [],
        galleryItemId: 0,
        loading: false,
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

    //set single gallery item id
    const setItemId = id => {
        dispatch({
            type: SET_ITEM_ID,
            payload: id
        });

    }

    // Get single gallery item
    const getItem = async id => {
        setLoading();

        const res = await axios.get(
            `http://localhost:5000/api/items/${id}`
        );

        dispatch({
            type: GET_ITEM,
            payload: res.data
        });
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    //return state inside context
    return (
        <GalleryContext.Provider
            value={{
                galleryItems: state.galleryItems,
                galleryItem: state.galleryItem,
                galleryItemId: state.galleryItemId,
                loading: state.loading,
                getItems,
                getItem,
                setItemId,
            }}
        >
            {props.children}
        </GalleryContext.Provider>
    );

};

export default GalleryState;
