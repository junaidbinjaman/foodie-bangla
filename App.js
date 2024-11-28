import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Button} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigators() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                sceneContainerStyle: {backgroundColor: '#3f2f25'},
                drawerContentStyle: {backgroundColor: '#351401'},
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({color, size}) => (
                        <Ionicons name='list' color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Favorite Screen'
                component={FavoriteScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({color, size}) => (
                        <Ionicons name='star' color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {backgroundColor: '#351401'},
                            headerTintColor: 'white',
                            contentStyle: {backgroundColor: '#3f2f25'},
                        }}
                    >
                        <Stack.Screen
                            name='Drawers'
                            component={DrawerNavigators}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='MealOverview'
                            component={MealsOverviewScreen}
                            options={({route, navigation}) => {
                                const catId = route.params.categoryId;
                                return {
                                    title: catId,
                                };
                            }}
                        />
                        <Stack.Screen
                            name='MealDetail'
                            component={MealDetailScreen}
                            options={{
                                title: 'About the Meal',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
