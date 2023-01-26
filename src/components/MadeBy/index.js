import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import bear from './northplay.png';

const Wrapper = styled.div`
  background-color: #4d2ec0;
  background-image: url(${props => props.gradient.src});
  background-size: 1px 600px;
  background-position: top left;
  background-repeat: repeat-x;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 600px;
  margin-top: -300px;
  width: 100%;
  z-index: -1;
  
  @media (max-width: 620px) {
    margin-top: -250px;
  }
`;

const Container = styled.div`
  text-align: center;
  p {
    
  }
  p a {
    color: #fff;
    margin: 0 50px;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 1 1 1080px;
  padding: 80px 0;
  
  @media (max-width: 620px) {
    flex-wrap: wrap;
  }
`;

const Text = styled.a`
  flex: 1 1 50%;
  align-items: center;
  color: #fff;
  display: flex;
  font-family: "cubano";
  font-size: 30px;
  line-height: 1.1em;
  text-decoration: none;
  
  @media (max-width: 620px) {
    flex: 1 1 100%;
    text-align: center;
    justify-content: center;
    margin: 10px 0;
    order: 2;
  }
`;

const LeftText = styled(Text)`
  justify-content: flex-end;
  
  @media (max-width: 620px) {
    order: 1;
  }
`;

const People = styled.span`
  text-align: right;
`;
const Location = styled.span`
  text-align: left;
`;

const Logo = styled.img`
  height: 153px;
  width: 158px;
  transition: all 0.15s ease;
  
  &:hover {
    transform: scale(1.1, 1.1);
  }
  
  @media (max-width: 620px) {
    order: 0;
  }
`;

const Northplay = styled.a`
  flex: 0 1 158px;
  margin: 0 35px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MadeBy = (props) => {
  return <Wrapper {...props}>
    <Container>
      <Content>
        <LeftText href="https://northplay.co" target="_blank">
          <People>Made by Northplay</People>
        </LeftText>
        <Northplay href="https://northplay.co" target="_blank"><Logo src={bear.src} alt="Northplay" /></Northplay>
        <Text href="https://northplay.co" target="_blank">
          <Location>In Copenhagen</Location>
        </Text>
      </Content>
      <p>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Use</Link>
    </p>
    </Container>
  </Wrapper>
};


export default MadeBy;
