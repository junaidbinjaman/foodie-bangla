import {Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screen/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
    }}>
        <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
        }} />
        <Drawer.Screen name='Favorite' component={FavoriteScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
        }} />
    </Drawer.Navigator>
}

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <FavoriteContextProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen
                        name='Drawer'
                        component={DrawerNavigation}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen 
                    name='MealDetail'
                    component={MealDetailScreen}
                    options={{
                        title: 'About the meal'
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            </FavoriteContextProvider>
        </>
    );
}

const styles = StyleSheet.create({});
