import * as React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MeasureCard from '../../components/utils/measurecard';
import medidas from '../../../medidas.json';

const Measures = ({ navigation }) => {

    return(

        <View style = {style.wrapper}>

            <View style = {style.topWrapper}>
                <View style = {style.textWrapper}>
                    <Text style = {style.textStyle}>HISTÓRICO</Text>
                </View>
                <View style = {style.buttonWrapper}>
                    <TouchableOpacity onPress = {() => {navigation.navigate('AddMeasure')}}>
                        <FontAwesome5 name={'plus-circle'} size = {25} light></FontAwesome5>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {style.bodyWrapper}>

                <FlatList
                
                    data = {medidas}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity onPress={() => {navigation.navigate('MeasureDetail', {item})}}>
                                <MeasureCard
                                    medida = {item}
                                />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor = {item => item.id.toString()}
                    numColumns = {1}

                />

            </View>
        </View>

    );

}

export default Measures;

const style = StyleSheet.create({

    wrapper: {
        flex: 1,
    },
    topWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    bodyWrapper: {
        flex: 7,
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 25,
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 25,
    },
    textStyle: {
        fontFamily: 'Oswald-Medium',
        fontSize: 15,
    },

})