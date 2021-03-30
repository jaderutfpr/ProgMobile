import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SwitchNavigator } from './src/components/navigation/SwitchNavigator'

const App = () => {

  return (
  
    <NavigationContainer>
      <SwitchNavigator/>
    </NavigationContainer>
    
  );

}

export default App;