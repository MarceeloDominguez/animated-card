import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItems() {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <View style={styles.wrapItemLeft}>
          <View style={styles.circleItem}>
            <Text style={styles.textCircle}>s</Text>
          </View>
          <View style={styles.wrapTitleEndDate}>
            <Text numberOfLines={1} style={styles.title}>
              Sueldo
            </Text>
            <Text style={styles.date}>Domingo, 4 Jul. 2023</Text>
          </View>
        </View>
        <View>
          <Text style={styles.money}>+$ 12.000,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  containerItem: {
    backgroundColor: "#fff",
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  circleItem: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#379237",
  },
  wrapItemLeft: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },
  textCircle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  wrapTitleEndDate: {
    flex: 1,
    height: 40,
  },
  title: {
    color: "#000",
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: 15,
    textTransform: "capitalize",
  },
  date: {
    color: "#303133",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.4,
    opacity: 0.8,
    textTransform: "capitalize",
  },
  money: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#379237",
  },
});
