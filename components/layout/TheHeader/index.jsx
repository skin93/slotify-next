import React from 'react';
import { HeaderContainer, HeaderWrapper } from '@/styles/Header.styled.';
import Brand from './Brand';
import Hamburger from './Hamburger';
import Navigation from './Navigation';

const TheHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Brand />
        <Navigation />
        <Hamburger />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default TheHeader;
