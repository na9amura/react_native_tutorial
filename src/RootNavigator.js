import {createStackNavigator} from "react-navigation";

import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default RootStack;
