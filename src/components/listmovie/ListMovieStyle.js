import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flatListContainer: {
        marginTop: 10,
        marginHorizontal: 5,
        marginBottom: 100
    },
    flatCardContainer: {
        backgroundColor: "#ffffff",
        padding: 10,
        flexDirection: "row",
    },
    cardTextContainer: {
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    cardImageStyle: {
        height: 150,
        width: 100,
        resizeMode: "stretch"
    },
    movieListContainer: {
        marginBottom: 50
    },
    cardTitleStyle: {
        fontSize: 20,
        color: "#000",
        width: 170,
    },
    cardOverViewText: {
        fontSize: 16,
        color: "#4b4b4b",
        width: 200,
        marginVertical: 10
    },
    cardDateText: {
        fontSize: 14,
        color: "#777777",
    },
    cardListTitleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    selectHeart: {
        color: "#ff3a52"
    },
    off: {
        color: "#e3e3e3",
    },
});
export default styles;