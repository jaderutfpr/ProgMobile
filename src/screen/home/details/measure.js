import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MeasureDetail = ({ route, navigation }) => {

    const medida = route.params;

    return(

        <View style = {style.wrapper}>
            <View style = {style.topWrapper}>
                <Image
                    source = {
                        {uri: medida.item.img}
                    }
                    resizeMode = "cover"
                    style = {{flex: 1, borderRadius: 30,}}
                />
            </View>
            <View style = {style.bodyWrapper}>
                <View style = {style.listWrapper}>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Peso</Text>
                        <Text style = {style.textListValue}>{`${medida.item.weight}`} kg</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Tórax</Text>
                        <Text style = {style.textListValue}>{`${medida.item.torax}`} cm</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Cintura</Text>
                        <Text style = {style.textListValue}>{`${medida.item.waist}`} cm</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Bíceps</Text>
                        <Text style = {style.textListValue}>{`${medida.item.biceps}`} cm</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Quadril</Text>
                        <Text style = {style.textListValue}>{`${medida.item.biceps}`} cm</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Coxas</Text>
                        <Text style = {style.textListValue}>{`${medida.item.biceps}`} cm</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Panturrilha</Text>
                        <Text style = {style.textListValue}>{`${medida.item.biceps}`} cm</Text>
                    </View>
                    <View style = {style.listItem}>
                        <Text style = {style.textListLabel}>Glúteos</Text>
                        <Text style = {style.textListValue}>{`${medida.item.biceps}`} cm</Text>
                    </View>
                </View>
            </View>
        </View>

    );

}

export default MeasureDetail;

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    topWrapper: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
    },
    bodyWrapper: {
        flex: 1,
    },
    listWrapper: {
        flex: 1,
        paddingTop: 25,
        paddingBottom: 25,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        marginLeft: 35,
        marginRight: 35,
    },
    textListLabel: {
        flex: 1,
        fontSize: 18,
        color: "#707070",
        textAlign: 'left',
        textAlignVertical: 'center',
    },
    textListValue: {
        flex: 1,
        fontSize: 18,
        color: "#707070",
        textAlign: 'right',
        textAlignVertical: 'center',
    },
})