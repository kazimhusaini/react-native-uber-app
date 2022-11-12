import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "234",
    icon: "home",
    name: "Home",
    location: "Home",
    description: "Jordan Gospel Centre, Land of Grace",
  },
  {
    id: "567",
    icon: "briefcase",
    name: "Work",
    location: "Work",
    description: "Finger Bites Kitchen, Mile 11",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { name, icon, description } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center py-5`}
          //   onPress={() => {
          //     if (shouldSetOrigin) {
          //       dispatch(
          //         setOrigin({
          //           location,
          //           description,
          //         })
          //       );
          //       navigation.navigate("MapScreen");
          //     } else {
          //       dispatch(
          //         setDestination({
          //           location,
          //           description,
          //         })
          //       );
          //     }
          //   }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-bold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
