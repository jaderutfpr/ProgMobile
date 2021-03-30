import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, ActivityIndicator } from 'react-native';
import FormRow from '../../components/utils/form';
import firebase from 'firebase';

export default class Register extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            email: "",
            password: "",
            passwordConfirm: "",
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

    processRegister() {

        this.setState({isLoading: true});
        const {email, password, passwordConfirm} = this.state;
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            this.setState({isLoading: false})
            this.props.navigation.replace('Personal')
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
            case "auth/email-already-in-use":
                return "Este e-mail já está sendo usado.";
            case "auth/weak-password":
                return "Senha muito fraca."
        }

    }

    renderButton() {

        if(this.state.isLoading)
            return <ActivityIndicator color="#2296f3"></ActivityIndicator>;
        return(

            <Button title = "REGISTRAR" onPress = {() => this.processRegister()}></Button>

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
                    <View style = {style.topTextWrapper}>
                        <Text style = {style.topTextStyle}>REGISTRO</Text>
                    </View>
                </View>

                <View style = {style.midWrapper}>
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
                                onChangeText = {valor => {this.onChangeHandler('password', valor)}}
                            ></TextInput>
                            <TextInput
                                style = {style.textInput}
                                placeholder = "Confirmar a Senha"
                                secureTextEntry = {true}
                                value = {this.state.passwordConfirm}
                                enablesReturnKeyAutomatically = {true}
                                onChangeText = {valor => {this.onChangeHandler('passwordConfirm', valor)}}
                            ></TextInput>
                        </FormRow>
                    </View>
                </View>

                <View style = {style.botWrapper}>
                    <View style = {style.botButtonWrapper}>
                        <View style = {style.buttonWrapper}>
                            {this.renderButton()}
                        </View>
                        <View style = {style.buttonErrorMessage}>
                            {this.renderMessage()}
                        </View>
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
        flex: 0.5,
        alignItems: 'center',
    },
    midWrapper: {
        flex: 1,
    },
    botWrapper: {
        flex: 0.5,
    },
    topTextWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    topTextStyle: {
        fontSize: 35,
        fontFamily: 'Oswald-Medium',
    },
    formRowWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    botButtonWrapper: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    buttonWrapper: {
        flex: 0.5,
        justifyContent: 'flex-end',
    },
    buttonErrorMessage: {
        flex: 0.5,
        justifyContent: 'flex-start',
        paddingTop: 5,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },

})