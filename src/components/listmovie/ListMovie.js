import React, {Component} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import SearchHeader from "../common/SearchHeader";
import styles from './ListMovieStyle';
import {connect} from 'react-redux';
import {getListOfMovie, updateFavourite, addToFavourite} from '../../store/action/MovielistAction'
import Spinner from "../common/Indicator";
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


class ListMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: [],
            visible: false
        };
        this.props.getListOfMovie()
    }

    showComplete = (item) => {
        Actions.completeCard({item: item})
    };
    goToFavourite = () => {
        Actions.favourite()
    };
    toggleFavourite = (adds, item, listIndex) => {
        let add = adds;
        add[listIndex] = !add[listIndex];
        this.setState({add: add});
        if (add[listIndex]) {
            this.props.addToFavourite(item)
        } else {
            let favouriteList = this.props.favourite;
            for (let i = 0; i <= favouriteList.length; i++) {
                if (favouriteList[i].imdbID === item.imdbID) {
                    favouriteList.splice(i, 1)
                }
            }
            this.props.updateFavourite(favouriteList);
        }
    };
    onChange = (text) => {
        this.props.getListOfMovie(text)
    };
    renderMovieList = () => {
        let year = "year : ";
        let type = "Type : ";
        let movieList = this.props.movieList;
        let favList = this.props.favourite;
        let {add} = this.state;
            if (this.props.spinner) {
                return <Spinner/>
            } else if (this.props.movieList === undefined) {
                return <Text>Search not found</Text>
            } else {
                for (let i = 0; i < movieList.length; i++) {
                    for (let j = 0; j < favList.length; j++) {
                        if (movieList[i].imdbID === favList[j].imdbID) {
                            add[i] = true
                        }
                    }
                }
                return (
                    movieList ?
                        movieList.map((item, listIndex) => {
                            return (
                                <TouchableOpacity key={listIndex} onPress={() => this.showComplete(item)}>
                                    <View style={styles.flatCardContainer}>
                                        <Image style={styles.cardImageStyle} source={{uri: item.Poster}}/>
                                        <View style={styles.cardTextContainer}>
                                            <View style={styles.cardListTitleView}>
                                                <Text
                                                    numberOfLines={2}
                                                    style={styles.cardTitleStyle}>{item.Title}</Text>
                                                <TouchableOpacity
                                                    onPress={() => this.toggleFavourite(add, item, listIndex)}>
                                                    <Icon name={"heart"} size={24}
                                                          style={[add[listIndex] ? styles.selectHeart : styles.off]}/>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={styles.cardOverViewText}
                                                  numberOfLines={2}>{type}{item.Type}</Text>
                                            <Text style={styles.cardDateText}>{year}{item.Year}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }) : null
                )
            }
    };

    render() {
        return (
            <View style={styles.movieListContainer}>
                <SearchHeader
                    onChangeText={(text) => this.onChange(text)}
                    onPress={() => this.goToFavourite()}/>
                <View style={styles.flatListContainer}>
                    <ScrollView>
                        {
                            this.renderMovieList()
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieList: state.indexList.movieList,
        spinner: state.indexList.loading,
        favourite: state.indexList.favourite
    }
}

export default connect(mapStateToProps, {getListOfMovie, updateFavourite, addToFavourite})(ListMovie);
