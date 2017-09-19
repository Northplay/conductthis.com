import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import twitter from './bird.png';
import facebook from './face.png';
import email from './plane.png';
import box from './lovebox.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 80px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
`;

const Icon = styled.img`
  margin-right: 15px;
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: #818181;
  display: flex;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const IconLink = ({ icon, text, url }) => {
  return (<StyledLink to={url} target="_blank">
    <Icon src={icon.src} height={icon.height} width={icon.width} />
    <span>{text}</span>
  </StyledLink>)
};

const Social = ({ presskit }) => {
  return <Container>
    <Row>
      <IconLink
        icon={{src: twitter, height: 32, width: 39}}
        url="https://twitter.com/conductthis"
        text="@conductthis" />
      <IconLink
        icon={{src: facebook, height: 36, width: 36}}
        url="https://facebook.com/conductthis"
        text="facebook.com/conductthis" />
      <IconLink
        icon={{src: email, height: 32, width: 44}}
        url="mailto:hey@northplay.co?subject=Conduct%20THIS"
        text="hey@northplay.co" />
    </Row>
    <Row>
      <IconLink
        icon={{src: box, height: 37, width: 44}}
        url={presskit}
        text="Download Press Kit" />
    </Row>
  </Container>
};

Social.propTypes = {
  presskit: PropTypes.string,
};

export default Social;