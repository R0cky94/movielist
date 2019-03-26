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
        return (
            <View style={styles.completeContainer}>
                <Header
                    onPress={() => this.goBackToList()}
                    icon={"arrow-back"}/>
                <ScrollView>
                    <View style={styles.completeCardContainer}>
                        <Image
                            source={{uri: this.props.item.Poster}}
                            style={styles.completeCardImage}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default CompleteCard;