import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ActivityDetail = ({ route, navigation }) => {

    const atividade = route.params;

    return(

        <View style = {style.wrapper}>
            <View style = {style.topWrapper}>
                <Image
                    source = {
                        {uri: atividade.item.img}
                    }
                    resizeMode = "cover"
                    style = {{flex: 1, borderRadius: 30,}}
                />
            </View>
            <View style = {style.bodyWrapper}>
                <View style = {style.listWrapper}>
                    <View style = {style.listContainer}>
                        <View style = {style.listTextTop}>
                            <View style = {style.TitleWrapper}>
                                <View style = {style.titleTextWrapper}>
                                    <Text style = {style.listTextTitle}>{`${atividade.item.title}`}</Text>
                                </View>
                            </View>
                            <Text style = {style.listTextDate}>{`${atividade.item.date}`}</Text>
                        </View>
                        <View style = {style.listTextBottom}>
                            <Text style = {style.listTextDescription}>{`${atividade.item.description}`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );

}

export default ActivityDetail;

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    topWrapper: {
        flex: 1.5,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
    },
    bodyWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    listTextTop: {
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        paddingBottom: 5,
        marginRight: 25,
        marginLeft: 25,
        alignItems: 'center',
    },
    TitleWrapper: {
        flexDirection: 'row',
    },
    titleTextWrapper: {
    },
    iconWrapper: {
        paddingLeft: 10,
    },
    listTextBottom: {
        paddingTop: 5,
    },
    listTextTitle: {
        fontFamily: 'Oswald-Medium',
        fontSize: 30,
        textAlign: 'center',
    },
    listTextDate: {
        fontFamily: 'Oswald-Medium',
        fontSize: 20,
        textAlign: 'center',
    },
    listTextDescription: {
        fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'center',
    },
})