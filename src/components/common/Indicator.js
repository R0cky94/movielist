import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const Spinner = () => {
    return (
        <View style={styles.indicatorStyle}>
            <ActivityIndicator color={"#ED213A"} size={'large'}/>
        </View>
    )
};
export default Spinner;
const styles = StyleSheet.create({
    indicatorStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,marginVertical: 100
    }
});