import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { BodyIcon } from '../../components/utils/svg';

export default class Start extends React.Component {

    render() {
        
        return(
            
            <TouchableWithoutFeedback onPress = {() => {this.props.navigation.replace('Login')}}>
                <View style = {style.wrapper}>
                    <View style = {style.iconWrapper}>
                        <BodyIcon></BodyIcon>
                    </View>
                    <View style = {style.textWrapper}>
                        <Text style = {style.textStyle}>VEM MONSTRO</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        );

    }

}



const style = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconWrapper: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textStyle: {
        fontSize: 50,
        fontFamily: 'Oswald-Medium',
    },

})