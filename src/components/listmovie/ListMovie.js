import React, {Component} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import SearchHeader from "../common/SearchHeader";
import styles from './ListMovieStyle';
import {connect} from 'react-redux';
import {getListOfMovie, removeFavourite, addToFavourite} from '../../store/action/MovielistAction'
import Spinner from "../common/Indicator";
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


class ListMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            visible: false
        }
    }

    componentWillMount() {
        this.props.getListOfMovie()
    }

    showComplete = (item) => {
        Actions.completeCard({item: item})
    };
    goToFavourite = () => {
        Actions.favourite()
    };
    addFavourite = (item) => {
        this.setState({add: !this.state.add});
        if (this.state.add) {
            this.props.addToFavourite(item)
        } else {
            this.props.removeFavourite(item)
        }
    };
    onChange = (text) => {
        this.props.getListOfMovie(text)
    };
    renderMovieList = () => {
        let year = "year : ";
        let type = "Type : ";
        let movieList = this.props.movieList;
        let {add} = this.state;
        if (this.props.spinner) {
            return <Spinner/>
        } else if (this.props.movieList === undefined) {
            return <Text>Search not found</Text>
        } else {
            return <FlatList data={movieList}
                             keyExtractor={(item, itemIndex) => item.toString()}
                             renderItem={({item, listIndex}) => (
                                 <TouchableOpacity onPress={() => this.showComplete(item)}>
                                     <View key={listIndex} style={styles.flatCardContainer}>
                                         <Image style={styles.cardImageStyle} source={{uri: item.Poster}}/>
                                         <View style={styles.cardTextContainer}>
                                             <View style={styles.cardListTitleView}>
                                                 <Text
                                                     numberOfLines={2}
                                                     style={styles.cardTitleStyle}>{item.Title}</Text>
                                                 <TouchableOpacity
                                                     onPress={() => this.addFavourite(item)}>
                                                     <Icon name={"heart"} size={24}
                                                           style={[styles.selectHeart,
                                                               add ? styles.off : {}]}/>
                                                 </TouchableOpacity>
                                             </View>
                                             <Text style={styles.cardOverViewText}
                                                   numberOfLines={2}>{type}{item.Type}</Text>
                                             <Text style={styles.cardDateText}>{year}{item.Year}</Text>
                                         </View>
                                     </View>
                                 </TouchableOpacity>
                             )}
            />
        }
    };

    render() {
        return (
            <View style={styles.movieListContainer}>
                <SearchHeader
                    onChangeText={(text) => this.onChange(text)}
                    onPress={() => this.goToFavourite()}/>
                <View style={styles.flatListContainer}>
                    {
                        this.renderMovieList()
                    }
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state,"list state");
    return {
        movieList: state.indexList.movieList,
        spinner: state.indexList.loading,
    }
}

export default connect(mapStateToProps, {getListOfMovie, removeFavourite, addToFavourite})(ListMovie);
