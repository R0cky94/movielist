import {REQUEST_LIST, RECEIVED, NOT_RECEIVED, ADD_FAVOURITE, REMOVE_FAVOURITE} from '../Type';
import axios from 'axios';


export const getListOfMovie = (text) => {
    return (dispatch) => {
        dispatch({type: REQUEST_LIST});
        let searchTitle = '';
        if (text === undefined) {
            searchTitle = "titanic";
        } else {
            searchTitle = text;
        }
        axios.get("http://www.omdbapi.com/?apikey=e6ba0eba&s=" + searchTitle)
            .then((response) => loginUserSuccess(dispatch, response))
            .catch((error) => loginUserFail(dispatch, error))
    }
};

const loginUserSuccess = (dispatch, response) => {
    dispatch({
        type: RECEIVED,
        send: response.data.Search
    });
};
const loginUserFail = (dispatch, error) => {
    dispatch({
        type: NOT_RECEIVED,
        send: error
    });
};
export const addToFavourite = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_FAVOURITE,
            send: item
        });
    };
};
export const updateFavourite = (favouriteList) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FAVOURITE,
            send: favouriteList
        });
    }
};
