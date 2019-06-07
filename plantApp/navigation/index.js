import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';


import Welcome from '../screens/Welcome';
// import Explore from '../screens/Explore';
// import Login from '../screens/Login';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';
// import Browse from '../screens/Browse';

import { theme } from '../constants';

const AppNavigator = createStackNavigator({
    Welcome,
    // Explore,
    // Login,
    // Product,
    // Settings,
    // Browse
}, {
    defaultNavigationOptions:{
        headerStyle: {},
        headerBackImage: <Image/>,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {}
    }
});

export default createAppContainer(AppNavigator);