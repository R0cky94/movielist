import React, {Component} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import SearchHeader from "../common/SearchHeader";
import styles from './ListMovieStyle';
import {connect} from 'react-redux';
import {getListOfMovie} from '../../store/action/MovielistAction'
import Spinner from "../common/Indicator";
import {Actions} from 'react-native-router-flux';

class ListMovie extends Component {
    componentWillMount() {
        this.props.getListOfMovie()
    }

    showComplete = (item) => {
        Actions.completeCard({item:item})
    };

    render() {
        let year = "year : ";
        let type = "Type : ";
        let movieList = this.props.movieList;
        return (
            <View style={styles.movieListContainer}>
                <SearchHeader/>
                <View style={styles.flatListContainer}>
                    {
                        this.props.spinner ? <Spinner/> :
                            <FlatList data={movieList}
                                      keyExtractor={(item, itemIndex) => item.toString()}
                                      renderItem={({item, listIndex}) => (
                                          <TouchableOpacity onPress={() => this.showComplete(item)}>
                                              <View key={listIndex} style={styles.flatCardContainer}>
                                                  <Image style={styles.cardImageStyle} source={{uri: item.Poster}}/>
                                                  <View style={styles.cardTextContainer}>
                                                      <Text
                                                          numberOfLines={2}
                                                          style={styles.cardTitleStyle}>{item.Title}</Text>
                                                      <Text style={styles.cardOverViewText}
                                                            numberOfLines={2}>{type}{item.Type}</Text>
                                                      <Text style={styles.cardDateText}>{year}{item.Year}</Text>
                                                  </View>
                                              </View>
                                          </TouchableOpacity>
                                      )}
                            />
                    }
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieList: state.indexList.movieList,
        spinner: state.indexList.loading
    }
}

export default connect(mapStateToProps, {getListOfMovie})(ListMovie);
