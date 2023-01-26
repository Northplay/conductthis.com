import React from "react";
import styled from "styled-components";

import Navigation from '../../components/Navigation';
import Content from "../../components/ConductTogether";
import Container from "../../components/Container";
import MadeBy from "../../components/MadeBy";
import JoinTheClub from "../../components/JoinTheClub";
import Community from "../../components/Community";

import gradient from "./gradient-deluxe.jpg";

const StyledWrapper = styled.div`
  background: #141519;
  width: 100%;
`;

const ConductAR = () => {
  return (
    <>
      <Navigation />
      <StyledWrapper>
        <Container>
          <Content />
          <Community />
          <JoinTheClub />
        </Container>
        <MadeBy gradient={gradient} />
      </StyledWrapper>
    </>
  );
};

export default ConductAR;
