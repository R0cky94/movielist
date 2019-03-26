import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import {Provider} from 'react-redux';
import ReduxThunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import reducers from './src/store/reducers/index'
import AppRouter from "./src/AppRouter";


export default class App extends Component<Props> {
    render() {
        const store = createStore(reducers, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} style={styles.container}>
                <AppRouter/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
