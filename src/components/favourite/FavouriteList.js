import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import styles from './FavouriteListStyle'
import Header from "../common/Header";
import {updateFavourite} from '../../store/action/MovielistAction'

class FavouriteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    goBack = () => {
        Actions.movieList()
    };
    removeFavourite = (item) => {
        let favouriteList = this.props.favouriteList;
        for (let i = 0; i < favouriteList.length; i++) {
            if (favouriteList[i].imdbID === item.imdbID) {
                favouriteList.splice(i, 1);
                this.props.updateFavourite(favouriteList);
                ToastAndroid.show('Removed successfully !', ToastAndroid.LONG);
            }
        }
    };

    render() {
        let year = "year : ";
        let type = "Type : ";
        let favouriteList = this.props.favouriteList;
        return (
            <View>
                <Header
                    title={"Favourite"}
                    onPress={() => this.goBack()}
                    icon={"arrow-back"}/>
                <View style={styles.flatFavouriteContainer}>
                    {
                        favouriteList ?
                            favouriteList.map((item, index) => {
                                console.log(item, "favouriteList");
                                return (
                                    <View key={index} style={styles.flatFavouriteCardContainer}>
                                        <Image style={styles.FavouriteCardImageStyle}
                                               source={{uri: item.Poster}}/>
                                        <View style={styles.cardTextFavouriteContainer}>
                                            <View style={styles.favouriteTitleView}>
                                                <Text
                                                    numberOfLines={4}
                                                    style={styles.cardFavouriteTitleStyle}>{item.Title}</Text>
                                                <TouchableOpacity onPress={() => this.removeFavourite(item)}>
                                                    <Text style={styles.removeTextStyle}>Remove</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={styles.favouriteOverViewText}
                                                  numberOfLines={2}>{type}{item.Type}</Text>
                                            <Text style={styles.favouriteDateText}>{year}{item.Year}</Text>
                                        </View>
                                    </View>
                                )
                            }) :
                            <Text style={{alignSelf: "center", color: "#6b6b6b"}}>No favourites</Text>
                    }
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        favouriteList: state.indexList.favourite,
    }
}

export default connect(mapStateToProps, {updateFavourite})(FavouriteList);
