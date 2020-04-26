import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import { StackNavigatorParamlist } from "../context/types";

type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const Feed = (props: Props) => {
  const theme = useTheme();

  return (
    <View>
      <Text>Feeds</Text>
    </View>
  );
};
