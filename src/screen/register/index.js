import React from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import { BodyIcon, OrDivider } from '../../components/utils/svg';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class RegIndex extends React.Component {

    render() {

        return(
            
            <View style = {style.wrapper}>
                <View style = {style.topWrapper}>
                    <View style = {style.bodyIconWrapper}>
                        <BodyIcon></BodyIcon>
                    </View>
                    <View style = {style.topTextWrapper}>
                        <Text style = {style.topTextStyle}>VEM MONSTRO</Text>
                    </View>
                </View>

                <View style = {style.midWrapper}>
                    <View style = {style.midTextWrapper}>
                        <Text style = {style.midTextStyle}>EXERCITE-SE!</Text>
                        <Text style = {style.midSubTextStyle}>Modifique seu dia-a-dia.</Text>
                        <Text style = {style.midSubTextStyle}>Acompanhe seu progresso diário!</Text>
                    </View>
                    <View style = {style.midButtonWrapper}>
                        <Button onPress = {() => this.props.navigation.navigate('Register')} title = 'CRIAR CONTA'></Button>
                    </View>
                </View>

                <View style = {style.botWrapper}>
                    <View style = {style.botOrBarWrapper}>
                        <OrDivider></OrDivider>
                    </View>
                    <View style = {style.botOptionsWrapper}>
                        <View style = {style.facebookIcon}>
                            <TouchableWithoutFeedback onPress = {() => {alert('Facebook')}}>
                                <View style = {style.facebookIconRadius}>
                                    <Icon name = "facebook" size = {35} color = "#fff"></Icon>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style = {style.googleIcon}>
                            <TouchableWithoutFeedback onPress = {() => {alert('Google')}}>
                                <View style = {style.googleIconRadius}>
                                    <Icon name = "google" size = {35} color = "#4285f4"></Icon>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style = {style.twitterIcon}>
                            <TouchableWithoutFeedback onPress = {() => {alert('Twitter')}}>
                                <View style = {style.twitterIconRadius}>
                                    <Icon name = "twitter" size = {35} color = "#FFF"></Icon>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style = {style.botOnBoardWrapper}>
                        <Text style = {style.registeredText}>Já registrado?</Text>
                        <TouchableWithoutFeedback onPress = {() => this.props.navigation.replace('Login')}>
                            <Text style = {style.registeredLoginText}> Login</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        );
        
    }

}

const style = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topWrapper: {
        flex: 2,
        alignItems: 'center',
    },
    midWrapper: {
        flex: 1.5,
    },
    botWrapper: {
        flex: 1.5,
    },
    bodyIconWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    topTextWrapper: {
        flex: 0.3,
        justifyContent: 'flex-start',
    },
    topTextStyle: {
        fontSize: 35,
        fontFamily: 'Oswald-Medium',
    },
    midTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    midButtonWrapper: {
        flex: 0.6,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    midTextStyle: {
        fontSize: 24,
        fontFamily: 'Oswald-Medium',
    },
    midSubTextStyle: {
        fontSize: 16,
        fontFamily: 'Roboto',
    },
    botOrBarWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botOptionsWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    botOnBoardWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    facebookIcon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    googleIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    twitterIcon: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    registeredText: {
        fontFamily: 'roboto',
    },
    registeredLoginText: {
        fontFamily: 'roboto',
        color: '#3EC7E6',
    },
    facebookIconRadius: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#3B5998',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIconRadius: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    twitterIconRadius: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#00ACED',
        justifyContent: 'center',
        alignItems: 'center',
    },

})