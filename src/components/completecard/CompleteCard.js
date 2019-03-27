import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './CompleteCardstyle'
import Header from "../common/Header";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';


class CompleteCard extends Component {
    goBackToList = () => {
        Actions.pop()
    };

    render() {
        let movieCard = this.props.item;
        let year = "Year : ";
        let imdb = "IMDB : ";
        let type = "Type : ";
        return (
            <View style={styles.completeContainer}>
                <Header
                    title={movieCard.Title}
                    onPress={() => this.goBackToList()}
                    icon={"arrow-back"}/>
                <ScrollView>
                    <View style={styles.completeCardContainer}>
                        <Image
                            source={{uri: movieCard.Poster}}
                            style={styles.completeCardImage}/>
                        <View style={styles.completeCardTextView}>
                            <Text numberOfLines={2}
                                  style={styles.completeTitleStyle}>{movieCard.Title}</Text>
                            <Text style={styles.completeTypeStyle}>
                                {type}{movieCard.Type}</Text>
                            <Text style={styles.completeIdStyle}>
                                {imdb}{movieCard.imdbID}</Text>
                            <Text style={styles.completeYearStyle}>
                                {year}{movieCard.Year}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default CompleteCard;