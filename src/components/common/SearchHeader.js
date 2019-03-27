import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {icon} from '../../assets/icons/menuIcon'

const SearchHeader = ({onPress,onChangeText}) => {
    return (
        <View style={styles.searchHeaderContainer}>
            <View style={styles.searchContainer}>
                <Icon name={"search"} style={{fontSize: 22, color: "#686868"}}/>
                <TextInput
                    onChangeText={onChangeText}
                    style={styles.inputStyle}
                    placeholder={"search"}/>
            </View>
            <TouchableOpacity
                style={styles.menuStyle}
                onPress={onPress}>
                {icon}
            </TouchableOpacity>
        </View>
    );
};

export default SearchHeader;

const styles = StyleSheet.create({
    searchHeaderContainer: {
        height: 70,
        backgroundColor: "#ED213A",
        alignItems: "center",
        paddingLeft: 6,
        flexDirection: "row"
    },
    searchContainer: {
        backgroundColor: "#FFFFFF",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 6,
        justifyContent: "flex-start",
        flexGrow: .9
    },
    inputStyle: {
        marginLeft: 5,
        flex: 1,
        fontSize: 18,
        color: "#686868"
    },
    menuStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20
    }
});