import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Activities from '../../screen/home/activities';
import Measures from '../../screen/home/measures';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {

    return(

        <Tab.Navigator>
            <Tab.Screen name = "Atividades" component = {Activities}/>
            <Tab.Screen name = "Medidas" component = {Measures}/>
        </Tab.Navigator>

    );

}

export { TabNavigator };