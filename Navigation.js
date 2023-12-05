import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/Feed";
import Products from "./screens/Products";
import Cart from "./screens/Cart";

const Tab = createBottomTabNavigator()

function TabGroup(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Feed} />
            <Tab.Screen name="Hroducts" component={Products} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}


const Navigation = () => {
  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  )
}

export default Navigation
