import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type Prop = {
  scaleY: Animated.AnimatedInterpolation<number>;
  translateY: Animated.AnimatedInterpolation<number>;
  opacity: Animated.AnimatedInterpolation<number>;
  scaleTextCenter: Animated.AnimatedInterpolation<number>;
  borderRadius: Animated.AnimatedInterpolation<number>;
};

export default function Card({
  scaleY,
  translateY,
  opacity,
  scaleTextCenter,
  borderRadius,
}: Prop) {
  const [eyeShow, setEyeShow] = useState(true);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [{ translateY: translateY }, { scaleY: scaleY }],
          borderRadius: borderRadius,
        },
      ]}
    >
      <LinearGradient
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 1.2 }}
        colors={["#4f80c3", "#c661eb", "#ee8183"]}
        style={styles.cardGradient}
      >
        <View style={styles.contentInfoCard}>
          <Animated.View style={[styles.containerDate, { opacity: opacity }]}>
            <Text style={styles.date}>1 Jun. 2023 - 7 Jun. 2023</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.containerTotal,
              { transform: [{ scaleY: scaleTextCenter }] },
            ]}
          >
            <TouchableOpacity
              onPress={() => setEyeShow(!eyeShow)}
              activeOpacity={1}
              style={styles.wrapEye}
            >
              <Text style={styles.total}>
                {eyeShow ? "$ 70.000,00" : "******"}
              </Text>
              <Ionicons
                name={eyeShow ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.containerFooter, { opacity: opacity }]}>
            <View style={styles.wrapContentLeftEndRight}>
              <View style={[styles.wrapArrow]}>
                <AntDesign name="arrowup" size={15} color="#379237" />
              </View>
              <View>
                <Text style={styles.title}>Ingresos</Text>
                <Text style={styles.money}>
                  {eyeShow ? "$ 80.000,00" : "******"}
                </Text>
              </View>
            </View>
            <View style={styles.wrapContentLeftEndRight}>
              <View style={[styles.wrapArrow]}>
                <AntDesign name="arrowdown" size={15} color="#DC3535" />
              </View>
              <View>
                <Text style={styles.title}>Gastos</Text>
                <Text style={styles.money}>
                  {eyeShow ? "$ 10.000,00" : "******"}
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    marginHorizontal: 24,
    marginTop: 50,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 3,
    overflow: "hidden",
    justifyContent: "center",
    elevation: 12,
  },
  cardGradient: {
    paddingHorizontal: 10,
    height: 200,
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
  contentInfoCard: {
    flex: 1,
    justifyContent: "center",
  },
  containerDate: {
    alignItems: "center",
    marginTop: 20,
  },
  date: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 14,
  },
  containerTotal: {
    alignItems: "center",
    marginVertical: 20,
  },
  wrapEye: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  total: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  containerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
    paddingHorizontal: 7,
  },
  wrapContentLeftEndRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapArrow: {
    width: 26,
    height: 26,
    backgroundColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26 / 2,
    marginRight: 14,
  },
  title: {
    color: "#fff",
    fontSize: 12,
  },
  money: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
