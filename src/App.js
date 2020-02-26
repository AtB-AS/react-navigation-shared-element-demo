import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {enableScreens} from 'react-native-screens';
import {MainScreen} from './MainScreen';
import {DetailScreen} from './DetailScreen';
import {ModalScreen} from './ModalScreen';
import Icon from 'react-native-vector-icons/Ionicons';

enableScreens();

const Stack1 = createSharedElementStackNavigator();

const Navigator1 = () => {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        name="Main"
        component={MainScreen}
        options={{title: 'Normal'}}
      />
      <Stack1.Screen name="Detail" component={DetailScreen} />
    </Stack1.Navigator>
  );
};

const Stack2 = createSharedElementStackNavigator();

const Navigator2 = () => {
  return (
    <Stack2.Navigator>
      <Stack2.Screen
        name="Main2"
        component={props => <MainScreen {...props} modal />}
        options={{title: 'Modal'}}
      />
    </Stack2.Navigator>
  );
};

const Tab1 = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab1.Navigator>
      <Tab1.Screen
        name="Tab1"
        component={Navigator1}
        options={{
          title: 'Stack',
          tabBarIcon: props => (
            <Icon name="md-arrow-forward" size={20} color={props.tintColor} />
          ),
        }}
      />
      <Tab1.Screen
        name="Tab2"
        component={Navigator2}
        options={{
          title: 'Modal',
          tabBarIcon: props => (
            <Icon name="md-arrow-up" size={20} color={props.tintColor} />
          ),
        }}
      />
    </Tab1.Navigator>
  );
};

const RootStack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}>
        <RootStack.Screen name="Tabs" component={TabNavigator} />
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
