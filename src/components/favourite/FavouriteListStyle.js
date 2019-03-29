import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flatFavouriteContainer: {
        marginTop: 10,
        marginHorizontal: 5,
        marginBottom: 100
    },
    flatFavouriteCardContainer: {
        backgroundColor: "#fbfbfb",
        padding: 10,
        flexDirection: "row",
    },
    FavouriteCardImageStyle: {
        height: 150,
        width: 100,
        resizeMode: "stretch"
    },
    cardTextFavouriteContainer: {
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    cardFavouriteTitleStyle: {
        fontSize: 20,
        color: "#000",
        width: 140,
    },
    favouriteOverViewText: {
        fontSize: 16,
        color: "#4b4b4b",
        width: 200,
        marginVertical: 10
    },
    favouriteDateText: {
        fontSize: 14,
        color: "#777777",
    },
    favouriteTitleView:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    removeTextStyle:{
        fontSize:16,
        color:"#343434",
    }
});
export default styles