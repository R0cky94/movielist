import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    completeContainer:{
    },
    completeCardContainer:{
    },
    completeCardImage:{
        width:"100%",
        height:250,
        resizeMode: "stretch",
    },
    completeCardTextView:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    completeTitleStyle:{
        fontSize: 20,
        color:"#000",
        width: 250,
    },
    completeTypeStyle:{
        fontSize: 16,
        color: "#4b4b4b",
        marginVertical: 10
    },
    completeYearStyle:{
        fontSize:14,
        color:"#777777",
    },
    completeIdStyle:{
        fontSize:14,
        color:"#4b4b4b",
        marginBottom: 10
    }
});
export default styles;