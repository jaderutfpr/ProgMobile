import * as React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ActivityCard from '../../components/utils/activitycard';
import atividades from '../../../atividades.json';

const Activities = ({ navigation }) => {

    return(

        <View style = {style.wrapper}>

            <View style = {style.topWrapper}>
                <View style = {style.textWrapper}>
                    <Text style = {style.textStyle}>HISTÓRICO</Text>
                </View>
                <View style = {style.buttonWrapper}>
                    <TouchableOpacity onPress = {() => {navigation.navigate('AddActivity')}}>
                        <FontAwesome5 name={'plus-circle'} size = {25} light></FontAwesome5>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {style.bodyWrapper}>

                <FlatList
                
                    data = {atividades}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity onPress={() => {navigation.navigate('ActivityDetail', {item})}}>
                                <ActivityCard
                                    atividade = {item}
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

export default Activities;

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