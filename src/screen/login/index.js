import React from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { BodyIcon, OrDivider } from '../../components/utils/svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormRow from '../../components/utils/form';
import firebase from 'firebase';

Icon.loadFont();

export default class Login extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            email: "",
            password: "",
            isLoading: false,
            message: "",

        }

    }

    componentDidMount() {

        var firebaseConfig = {
            apiKey: "AIzaSyBJpvgcc9OCOXW2AZaQZqG4-A1WTjY5x_s",
            authDomain: "mobile2020-02.firebaseapp.com",
            projectId: "mobile2020-02",
            storageBucket: "mobile2020-02.appspot.com",
            messagingSenderId: "1052350933629",
            appId: "1:1052350933629:web:778565a56b44c9ec9f9f14",
            measurementId: "G-PLNCE0VQ2E"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }

    }

    onChangeHandler(field, valor) {

        this.setState({

            [field]: valor

        });

    }

    processLogin() {

        this.setState({isLoading: true});
        const {email, password} = this.state;
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            this.setState({isLoading: false})
            this.props.navigation.replace('Home')
        })
        .catch(error => {
            this.setState({isLoading: false}) 
            this.setState({message: this.getMessageByError(error.code)});
        })

    }

    getMessageByError(code) {

        switch(code) {
            case "auth/invalid-email":
                return "E-mail inválido.";
            case "auth/user-not-found":
                return "Usuário não encontrado.";
            case "auth/wrong-password":
                return "Email ou Senha incorreta."
        }

    }

    renderButton() {

        if(this.state.isLoading)
            return <ActivityIndicator color="#2296f3"></ActivityIndicator>;
        return(

            <Button title = "Login" onPress = {() => this.processLogin()}></Button>

        );

    }

    renderMessage() {

        const {message} = this.state;
        if(!message)
            return null;
        return(

            <View>
                <Text style={style.errorText}>{message}</Text>
            </View>

        )
    }

    render() {

        return(

            <View style = {style.wrapper}>
                <View style = {style.topWrapper}>
                    <View style = {style.bodyIconWrapper}>
                        <BodyIcon></BodyIcon>
                    </View>
                    <View style = {style.topTextWrapper}>
                        <Text style = {style.topTextStyle}>LOGIN</Text>
                    </View>
                </View>
                <View style = {style.midWrapper}>
                    <KeyboardAvoidingView style = {{flex: 1}} behavior = "padding">
                    <View style = {style.formRowWrapper}>
                        <FormRow>
                            <TextInput 
                                style = {style.textInput}
                                placeholder = "Email"
                                value = {this.state.email}
                                onChangeText = {valor => {this.onChangeHandler('email', valor)}}
                            ></TextInput>
                            <TextInput
                                style = {style.textInput}
                                placeholder = "Senha"
                                secureTextEntry = {true}
                                value = {this.state.password}
                                enablesReturnKeyAutomatically = {true}
                                onChangeText = {valor => {this.onChangeHandler('password', valor)}}
                            ></TextInput>
                        </FormRow>
                    </View>
                    <View style = {style.midButtonWrapper}>
                        <View style = {style.buttonWrapper}>
                            {this.renderButton()}
                        </View>
                        <View style = {style.buttonErrorMessage}>
                            {this.renderMessage()}
                        </View>
                    </View>
                    </KeyboardAvoidingView>
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
                            <TouchableWithoutFeedback activeOpacity={0.85} underlayColor="#fff" onPress = {() => {alert('Google')}}>
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
                        <Text style = {style.registeredText}>Não é registrado?</Text>
                        <TouchableWithoutFeedback onPress = {() => this.props.navigation.replace('RegIndex')}>
                            <Text style = {style.registeredLoginText}> Cadastre-se</Text>
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
    formRowWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    midButtonWrapper: {
        flex: 0.6,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonErrorMessage: {
        flex: 0.5,
        justifyContent: 'flex-end',
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
    googleIconStyle: {
        elevation: 2,
        borderRadius: 50,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
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