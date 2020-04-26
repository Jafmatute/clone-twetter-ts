import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Feed } from "../components/Feed";
import { Details } from "../components/Detalis";
import { StackNavigatorParamlist } from "../context/types";
const Stack = createStackNavigator<StackNavigatorParamlist>();

export const FeedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerTitle: "Twitter" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: "Tweet" }}
      />
    </Stack.Navigator>
  );
};
