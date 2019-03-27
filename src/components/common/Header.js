import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({icon,onPress,title}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.backContainer}>
                <TouchableOpacity onPress={onPress}>
                <Icon name={icon} style={{fontSize: 24, color: "#FFFFFF"}}/>
                </TouchableOpacity>
                <Text style={styles.headerTitleStyle}>{title}</Text>
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
    backContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    headerTitleStyle:{
        fontSize: 18,
        color: "#FFFFFF",
        marginLeft: 15
    }
});