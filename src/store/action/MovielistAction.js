import {REQUEST_LIST, RECEIVED,NOT_RECEIVED} from '../Type';
import axios from 'axios';


export const getListOfMovie = () => {
    return (dispatch) => {
        dispatch({type: REQUEST_LIST});
        axios.get("http://www.omdbapi.com/?apikey=e6ba0eba&s=batman&page=avengers")
            .then(response => loginUserSuccess(dispatch,response))
            .catch((error) => loginUserFail(dispatch,error))
    }

};
const loginUserSuccess = (dispatch,response) => {
    dispatch({
        type: RECEIVED,
        send: response.data.Search
    })
};
const loginUserFail = (dispatch,error) => {
    dispatch({
        type: NOT_RECEIVED,
        send: error
    })
};
