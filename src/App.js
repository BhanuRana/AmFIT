import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Track from './screens/Track/Track';
import UpdateWeight from './screens/UpdateWeight/UpdateWeight';
import Progress from './screens/Progress/Progress';
import Advisor from './screens/Advisor/Advisor';
import Colors from './utils/Colors';

const Tab = createBottomTabNavigator();
const tabScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Track') {
      iconName = 'verified';
    } else if (route.name === 'Progress') {
      iconName = focused ? 'poll' : 'poll';
    } else if (route.name === 'Advisor') {
      iconName = 'menu-book';
    }

    // You can return any component that you like here!
    return <MaterialIcon name={iconName} size={size} color={color} />;
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={tabScreenOptions}
      tabBarOptions={{activeTintColor: Colors.red}}>
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Advisor" component={Advisor} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{header: () => null}}
        />
        <Stack.Screen name="UpdateWeight" component={UpdateWeight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
