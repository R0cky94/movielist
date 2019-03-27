import {REQUEST_LIST, RECEIVED,NOT_RECEIVED,ADD_FAVOURITE,REMOVE_FAVOURITE} from '../Type'

const INITIAL_STATE = {movieList: '', loading: false,favourite:[],nonFavourite:''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_LIST:
            return {...state, movieList: '', loading: true};
        case RECEIVED:
            return {...state, movieList: action.send, loading: false};
        case NOT_RECEIVED:
            return {...state, movieList: action.send, loading: false};
        case ADD_FAVOURITE:
            return {...state, favourite: action.send, };
        case REMOVE_FAVOURITE:
            return {...state, nonFavourite: action.send, };
        default:
            return {...state}
    }
}
