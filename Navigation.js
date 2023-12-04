import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/Feed";
import Settings from "./screens/TabsScreens/Settings";

const Tab = createBottomTabNavigator()

function TabGroup(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Settings" component={Settings} />
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
