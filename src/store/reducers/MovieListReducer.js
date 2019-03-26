import {REQUEST_LIST, RECEIVED,NOT_RECEIVED} from '../Type'

const INITIAL_STATE = {movieList: '', loading: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_LIST:
            return {...state, movieList: '', loading: true};
        case RECEIVED:
            return {...state, movieList: action.send, loading: false};
        case NOT_RECEIVED:
            return {...state, movieList: action.send, loading: false};
        default:
            return {...state}
    }
}
