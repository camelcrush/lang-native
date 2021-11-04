import React, { useRef } from "react";
import { Animated, PanResponder } from "react-native";
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
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const borderRadius = position.y.interpolate({
    inputRange: [-300, 300],
    outputRange: [100, 0],
  });
  const bgColor = position.y.interpolate({
    inputRange: [-300, 300],
    outputRange: ["rgb(255, 99, 71)", "rgb(71, 166, 255)"],
  });
  const panRespnder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        position.setOffset({ x: position.x._value, y: position.y._value });
      },
      onPanResponderMove: (_, { dx, dy }) => {
        position.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: () => {
        position.flattenOffset();
      },
    })
  ).current;
  return (
    <Container>
      <AnimatedBox
        {...panRespnder.panHandlers}
        style={{
          borderRadius,
          backgroundColor: bgColor,
          transform: [...position.getTranslateTransform()],
        }}
      />
    </Container>
  );
}
