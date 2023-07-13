import { useRef } from "react";
import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import ListItems from "./src/components/ListItems";
import Card from "./src/components/Card";

export default function App() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const scaleY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
    extrapolate: "clamp",
  });

  const translateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -50],
    extrapolate: "clamp",
  });

  //opacidad de las fechas y ingresos - gastos
  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  //para el texto principal
  const scaleTextCenter = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 2.2],
    extrapolate: "clamp",
  });

  //border radius del card
  const borderRadius = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [16, 6],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Card
        scaleY={scaleY}
        translateY={translateY}
        opacity={opacity}
        scaleTextCenter={scaleTextCenter}
        borderRadius={borderRadius}
      />
      <View style={styles.viewTop} />
      <FlatList
        data={[...Array(30)]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={[styles.titleList, { marginTop: 270 }]}>
            Transacciones
          </Text>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => <ListItems />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f6",
  },
  viewTop: {
    backgroundColor: "#f1f2f6",
    height: 160,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
  },
  titleList: {
    fontSize: 17,
    paddingHorizontal: 24,
    fontWeight: "bold",
    letterSpacing: 0.4,
    marginBottom: 15,
    color: "#303133",
    textTransform: "capitalize",
  },
});
