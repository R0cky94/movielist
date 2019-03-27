import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import ListMovie from "./components/listmovie/ListMovie";
import CompleteCard from "./components/completecard/CompleteCard";
import FavouriteList from "./components/favourite/FavouriteList";

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Scene key={"wrap"}>
                    <Scene initial key={"movieList"} component={ListMovie} hideNavBar={true}/>
                    <Scene key={"completeCard"} component={CompleteCard} hideNavBar={true}/>
                    <Scene key={"favourite"} component={FavouriteList} hideNavBar={true}/>
                </Scene>
            </Router>
        );
    }
}

export default AppRouter;