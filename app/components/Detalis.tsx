import React from "react";
import { RouteProp } from "@react-navigation/native";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { StackNavigatorParamlist } from "../context/types";

type Props = {
  route: RouteProp<StackNavigatorParamlist, "Details">;
};

export const Details = (props: Props) => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};
