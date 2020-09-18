import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import background from "src/assets/background.jpg";

const Background = styled.div`
  position: fixed;
  width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
  z-index: 1;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
`;

const Content = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 95%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function CardContainer(props: PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <Background />
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

export default CardContainer;
