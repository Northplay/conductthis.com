import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from 'next/Link';

import ctActive from "./ct-active.png";
import ctInactive from "./ct-inactive.png";
import ctGradient from "./gradient-this.png";
import caActive from "./ca-active.png";
import caInactive from "./ca-inactive.png";
import caGradient from "./gradient-ar.png";
import cdActive from "./cd-active.png";
import cdInactive from "./cd-inactive.png";
import cdGradient from "./gradient-deluxe.png";
import cnActive from "./cn-active.png";
import cnInactive from "./cn-inactive.png";
import cnGradient from "./gradient-together.png";

import platformApple from "./platform-iosmac.png";
import platformAndroid from "./platform-android.png";
import platformWindows from "./platform-windows.png";
import platformSteam from "./platform-steam.png";
import platformSwitch from "./platform-switch.png";
import { withRouter } from "next/router";

const platformImages = {
  ios: platformApple,
  tvos: platformApple,
  mac: platformApple,
  android: platformAndroid,
  windows: platformWindows,
  steam: platformSteam,
  switch: platformSwitch
};

const Item = styled(Link)`
  align-items: center;
  color: ${props => (props.isActive ? "#fff" : "rgba(255, 255, 255, 0.3)")};
  cursor: pointer;
  display: flex;
  flex: 1 1 33.3%;
  flex-direction: column;
  font-family: "cubano";
  font-size: 13pt;
  line-height: 2.6em;
  justify-content: center;
  margin-right: 20px;
  text-decoration: none;

  div {
    transition: transform 0.25s ease;
  }

  &:hover > div {
    transform: scale(1.1, 1.1) translateY(10px);
  }

  &:hover > :nth-child(2),
  &:hover > :last-child {
    transform: translateY(20px);
  }

  & > :last-child {
    opacity: ${props => (props.isActive ? 1 : 0.3)};
  }

  @media (max-width: 820px) {
    flex: 0 1 25%;
    margin: 0 0 20px 0;

    & > div {
      transform: scale(1.1, 1.1) translateY(10px);
    }

    &:hover > div,
    &:hover > :nth-child(2),
    &:hover > :last-child {
      transform: none;
    }

    & > :nth-child(2) {
      display: none;
    }

    & > :last-child {
      transform: scale(0.8, 0.8);
      margin-top: -15px;
    }
  }
`;

const Logo = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: url(${props => props.image.src});
  transition: background 0.25s ease, transform 0.25s ease;
  flex: 0 1 96px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  padding: 35px 0;
  justify-content: space-around;

  @media (max-width: 1100px) {
    margin: 0 10px;
  }

  @media (max-width: 820px) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  background-color: ${props => props.background.color};
  background-image: url(${props => props.background.image});
  background-repeat: repeat-x;
  background-position: top left;
  background-size: 1px 200px;
  transition: background 0.25s ease;

  ${"" /* @media (max-width: 820px) {
    overflow-x: hidden;
    position: relative;
    height: 250px;
  } */}
`;

const NavigationItem = ({
  router,
  path,
  activeImage,
  inactiveImage,
  tagline,
  platforms
}) => {
  const isActive = router.pathname === path;
  return (
    <Item href={path} isActive={isActive}>
      <Logo image={isActive ? activeImage : inactiveImage} />
      <div>{tagline}</div>
      <Platforms platforms={platforms} />
    </Item>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Platform = styled.div`
  display: block;
  width: 20px;
  height: 33px;
  flex: 0 0 20px;
  margin: 0 5px;
  background-image: url(${props => platformImages[props.platform].src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.25s ease;
`;

Platform.propTypes = {
  platform: PropTypes.string.isRequired
};

const Platforms = ({ platforms }) => {
  return (
    <List>
      {platforms.map(platform => (
        <Platform key={platform} platform={platform} />
      ))}
    </List>
  );
};

Platforms.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Navigation = ({ router }) => {
  const background = {
    "/": { color: "#141519", image: cdGradient.src },
    "/ar": { color: "#240e00", image: caGradient.src },
    "/this": { color: "#101b05", image: ctGradient.src },
    "/deluxe": { color: "#141519", image: cdGradient.src },
    "/together": { color: "#141519", image: cnGradient.src },
    "/privacy": { color: "#000", image: null },
    "/terms": { color: "#000", image: null },
  };

  return (
    <Container background={background[router.pathname]}>
      <Wrapper>
        <NavigationItem
          path="/this"
          platforms={["ios", "android"]}
          tagline="The mobile sensation"
          activeImage={ctActive}
          inactiveImage={ctInactive}
          router={router}
        />
        <NavigationItem
          path="/ar"
          platforms={["ios"]}
          tagline="The augmented reality ride"
          activeImage={caActive}
          inactiveImage={caInactive}
          router={router}
        />
        <NavigationItem
          path="/deluxe"
          platforms={["steam", "windows", "mac"]}
          tagline="The definitive PC experience"
          activeImage={cdActive}
          inactiveImage={cdInactive}
          router={router}
        />
        <NavigationItem
          path="/together"
          platforms={["switch"]}
          tagline="The party game"
          activeImage={cnActive}
          inactiveImage={cnInactive}
          router={router}
        />
      </Wrapper>
    </Container>
  );
};

export default withRouter(Navigation);
