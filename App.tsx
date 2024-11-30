import {Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#351401' },
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen
                        name='MealCategories'
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories',
                        }}
                    />
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                        // options={({route, navigation}: any) => {
                        //     const catId = route.params.categoryId;
                        //     return {
                        //         title: catId,
                        //     };
                        // }}
                    />
                    <Stack.Screen 
                    name='MealDetail'
                    component={MealDetailScreen}
                    // options={{
                    //     headerRight: () => {
                    //         return <Button title="Tap Me" />
                    //     }
                    // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({});
