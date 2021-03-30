import * as React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import TimelapseCard from '../../components/utils/timelapsecard';
import medidas from '../../../medidas.json';

const Timelapse = ({ navigation }) => {

    return(

        <View style = {style.wrapper}>

            <View style = {style.topWrapper}>
                <View style = {style.textWrapper}>
                    <Text style = {style.textStyle}>SEU PROGRESSO</Text>
                </View>
            </View>
            <View style = {style.bodyWrapper}>

                <FlatList horizontal = {true}
                
                    data = {medidas}
                    renderItem = {({item}) => {
                        return(
                            <TimelapseCard
                                medida = {item}
                            />
                        );
                    }}
                    keyExtractor = {item => item.id.toString()}
                    numColumns = {1}

                />

            </View>
        </View>

    );

}

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

export default Timelapse;