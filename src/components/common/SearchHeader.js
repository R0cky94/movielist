import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchHeader = () => {
    return (
        <View style={styles.searchHeaderContainer}>
            <View style={styles.searchContainer}>
                <Icon name={"search"} style={{fontSize: 22, color: "#686868"}}/>
                <TextInput style={styles.inputStyle} placeholder={"search"}/>
            </View>
        </View>
    );
};

export default SearchHeader;

const styles = StyleSheet.create({
    searchHeaderContainer: {
        height: 70,
        backgroundColor: "#ED213A",
        justifyContent: "center",
        padding: 5
    },
    searchContainer: {
        backgroundColor: "#FFFFFF",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 6
    },
    inputStyle: {
        marginLeft: 5,
        flex: 1,
        fontSize: 18,
        color: "#686868"
    }
});