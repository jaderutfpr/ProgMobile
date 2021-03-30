import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

import { HeaderLeft, HeaderTitle, HeaderRight } from '../utils/header';

import { TabNavigator } from './TabNavigator';
import Timelapse from '../../screen/timelapse';

const headerSize = Dimensions.get('screen').height/4;

const Stack = createStackNavigator();
const TimelapseStack = createStackNavigator();

const StackNavigator = ({ navigation }) => {

    return(

        <Stack.Navigator initialRouteName = "Home">

            <Stack.Screen
                name = "Home"
                component = {TabNavigator}
                options = {{
                    headerLeft: () => <HeaderLeft navigation = {navigation}/>,
                    headerTitle: () => <HeaderTitle/>,
                    headerRight: () => <HeaderRight/>,
                    headerStyle: {
                        height: headerSize,
                        shadowColor: "transparent"
                    }
                }}
            />
        </Stack.Navigator>

    );

}

const TimelapseStackNavigator = ({ navigation }) => {

    return(

        <TimelapseStack.Navigator initialRouteName = "Timelapse">

            <TimelapseStack.Screen
                name = "Timelapse"
                component = {Timelapse}
                options = {{
                    headerLeft: () => <HeaderLeft navigation = {navigation}/>,
                    headerTitle: () => <HeaderTitle/>,
                    headerRight: () => <HeaderRight/>,
                    headerStyle: {
                        height: headerSize,
                        shadowColor: "transparent"
                    }
                }}
            />
        </TimelapseStack.Navigator>

    );

}

export { StackNavigator };
export { TimelapseStackNavigator };