import React, { useRef, useState } from "react";
import { Animated, TouchableOpacity, Easing, Pressable } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled.View`
  width: 200px;
  height: 200px;
  background-color: tomato;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {
  const [up, setUp] = useState(false);
  const Y_POSITION = useRef(new Animated.Value(300)).current;
  const toggleUp = () => setUp((prev) => !prev);
  const moveUp = () => {
    Animated.timing(Y_POSITION, {
      toValue: up ? 300 : -300,
      useNativeDriver: false,
      duration: 1000,
    }).start(toggleUp);
  };
  const rotation = Y_POSITION.interpolate({
    inputRange: [-300, 300],
    outputRange: ["-360deg", "360deg"],
  });
  const borderRadius = Y_POSITION.interpolate({
    inputRange: [-300, 300],
    outputRange: [100, 0],
  });
  const bgColor = Y_POSITION.interpolate({
    inputRange: [-300, 300],
    outputRange: ["rgb(255, 99, 71)", "rgb(71, 166, 255)"],
  });
  Y_POSITION.addListener(() => {
    console.log("Y_POSITION:", Y_POSITION);
    console.log("rotaion:", rotation);
    console.log("borderRadious:", borderRadius);
  });
  return (
    <Container>
      <Pressable onPress={moveUp}>
        <AnimatedBox
          style={{
            borderRadius,
            rotation,
            backgroundColor: bgColor,
            transform: [{ rotateY: rotation }, { translateY: Y_POSITION }],
          }}
        />
      </Pressable>
    </Container>
  );
}
