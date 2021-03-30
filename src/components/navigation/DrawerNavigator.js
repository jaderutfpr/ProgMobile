import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../utils/customdrawer';
import { StackNavigator, TimelapseStackNavigator } from './StackNavigator';

import Login from '../../screen/login/index'

const Drawer = createDrawerNavigator();
const TimelapseDrawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return(

        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Home" component = {StackNavigator}/>
            <Drawer.Screen name = "Sair" component = {Login}/>
        </Drawer.Navigator>

    );

}

const TimelapseDrawerNavigator = () => {

    return(
        
        <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
            <Drawer.Screen name = "Timelapse" component = {TimelapseStackNavigator}/>
        </Drawer.Navigator>

    );

}

export { DrawerNavigator };
export { TimelapseDrawerNavigator };