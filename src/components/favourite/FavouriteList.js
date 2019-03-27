import React, {Component} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import styles from './FavouriteListStyle'
import Header from "../common/Header";
import Spinner from "../common/Indicator";

class FavouriteList extends Component {
    goBack = () => {
        Actions.movieList()
    };

    render() {
        let year = "year : ";
        let type = "Type : ";
        let movieList = this.props.favouriteList;
        console.log(movieList, "favourite list");
        return (
            <View>
                <Header
                    title={"Favourite"}
                    onPress={() => this.goBack()}
                    icon={"arrow-back"}/>
                <View style={styles.flatFavouriteContainer}>
                    {
                        this.props.spinner ? <Spinner/> :
                            <FlatList data={movieList}
                                      keyExtractor={(item, itemIndex) => item.toString()}
                                      renderItem={({item, listIndex}) => (
                                          <View key={listIndex} style={styles.flatFavouriteCardContainer}>
                                              <Image style={styles.FavouriteCardImageStyle}
                                                     source={{uri: item.Poster}}/>
                                              <View style={styles.cardTextFavouriteContainer}>
                                                  <Text
                                                      numberOfLines={2}
                                                      style={styles.cardTitleStyle}>{item.Title}</Text>
                                                  <Text style={styles.cardOverViewText}
                                                        numberOfLines={2}>{type}{item.Type}</Text>
                                                  <Text style={styles.cardDateText}>{year}{item.Year}</Text>
                                              </View>
                                          </View>
                                      )}
                            />
                    }
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state, "favourite");
    return {
        favouriteList: state.indexList.movieList,
    }
}

export default connect(mapStateToProps, {})(FavouriteList);
