// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.bigBlue}>Hello World !!</Text>
//       <Text>This is a Simple Landing Screen.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     color: '#00ffff',
//     backgroundColor: '#232c34',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bigBlue: {
//     color: 'cyan',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
// });

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// screens
import {
    OnBoarding,
} from "./app/screens/";

import { useFonts } from 'expo-font';

// screen for stack & tabs
const Stack = createStackNavigator();
const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./app/assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./app/assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./app/assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Onboarding screen */}
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};