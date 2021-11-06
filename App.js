import React, { useRef, useState } from "react";
import { Animated, PanResponder, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import icons from "./icons";

const BLACK_COLOR = "#1e272e";
const GRAY = "#485460";
const GREEN = "#2ecc71";
const RED = "#e74c3c";

const Container = styled.View`
  flex: 1;
  background-color: ${BLACK_COLOR};
`;

const Edge = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WordContainer = styled(Animated.createAnimatedComponent(View))`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY};
  border-radius: 50px;
`;

const Word = styled.Text`
  font-size: 38px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

const Center = styled.View`
  flex: 3;
`;

export default function App() {
  // Values

  // Animattions

  // Pan Responder

  return (
    <Container>
      <Edge>
        <WordContainer>
          <Word color={GREEN}>알아</Word>
        </WordContainer>
      </Edge>
      <Center></Center>
      <Edge>
        <WordContainer>
          <Word color={RED}>몰라</Word>
        </WordContainer>
      </Edge>
    </Container>
  );
}
