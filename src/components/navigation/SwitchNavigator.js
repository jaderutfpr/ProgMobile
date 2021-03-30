import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { DrawerNavigator, TimelapseDrawerNavigator } from './DrawerNavigator';

import PopupMenu from '../utils/popupmenu';

import Start from '../../screen/start/index';
import Login from '../../screen/login/index';
import RegIndex from '../../screen/register/index';
import Register from '../../screen/register/register';
import Personal from '../../screen/register/personal';
import AddActivity from '../../screen/home/add/addactivity';
import AddMeasure from '../../screen/home/add/addmeasure';
import ActivityDetail from '../../screen/home/details/activity';
import MeasureDetail from '../../screen/home/details/measure';


const Switch = createStackNavigator();

const SwitchNavigator = () => {

    return(

            <Switch.Navigator>
                <Switch.Screen name = "Start" component = {Start} options = {{headerShown: false}}/>
                <Switch.Screen name = "Login" component = {Login} options = {{headerShown: false}}/>
                <Switch.Screen name = "Home" component = {DrawerNavigator} options = {{headerShown: false}}/>
                <Switch.Screen name = "RegIndex" component = {RegIndex} options = {{headerShown: false}}/>
                <Switch.Screen name = "Register" component = {Register} options = {{headerShown: false}}/>
                <Switch.Screen name = "Personal" component = {Personal} options = {{headerShown: false}}/>
                <Switch.Screen name = "Timelapse" component = {TimelapseDrawerNavigator} options = {{headerShown: false}}/>
                <Switch.Screen
                    name = "AddActivity"
                    component = {AddActivity}
                    options = {{
                        headerTitle: "Adicionar Atividade",
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat-Regular'
                        },
                    }}
                />
                <Switch.Screen
                    name = "AddMeasure"
                    component = {AddMeasure}
                    options = {{
                        headerTitle: "Adicionar Medidas",
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat-Regular'
                        },
                    }}
                />
                <Switch.Screen
                    name = "ActivityDetail"
                    component = {ActivityDetail}
                    options = {
                        ({ route, navigation }) => ({
                            title: route.params.item.title,
                            headerTitleAlign: 'center',
                            headerTitleStyle: {fontFamily: 'Montserrat-Regular'},
                            headerRight: () => (
                                <View style = {{paddingRight: 10}}>
                                    <PopupMenu
                                        actions = {['Editar', 'Excluir']}
                                        onPress = {(eventName, index) => {
                                            if (eventName !== 'itemSelected') return
                                            if (index === 0) navigation.navigate('AddActivity')
                                            else navigation.reset({ index: 0, routes: [{ name:'Home' }] })
                                        }}
                                    />
                                </View>
                            ),
                        })
                    }
                />
                <Switch.Screen
                    name = "MeasureDetail"
                    component = {MeasureDetail}
                    options = {
                        ({ route, navigation }) => ({
                            title: route.params.item.date,
                            headerTitleAlign: 'center',
                            headerTitleStyle: {fontFamily: 'Montserrat-Regular'},
                            headerRight: () => (
                                <View style = {{paddingRight: 10}}>
                                    <PopupMenu
                                        actions = {['Editar', 'Excluir']}
                                        onPress = {(eventName, index) => {
                                            if (eventName !== 'itemSelected') return
                                            if (index === 0) navigation.navigate('AddMeasure')
                                            else navigation.reset({ index: 0, routes: [{ name:'Home' }] })
                                        }}
                                    />
                                </View>
                            ),
                        })
                    }
                />
            </Switch.Navigator>

    );

}

export { SwitchNavigator };