import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[Styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#CCC" }}
        style={(pressed) => [
          Styles.buttonContainer,
          pressed ? Styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <Text style={Styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const Styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    height: 200,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  buttonContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
