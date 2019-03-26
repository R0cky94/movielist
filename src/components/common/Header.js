import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({icon,onPress}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={onPress}>
                <Icon name={icon} style={{fontSize: 24, color: "#FFFFFF"}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Header;
const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        backgroundColor: "#ED213A",
        padding: 5,
        alignItems: "flex-start",
        justifyContent: "center"
    },
});