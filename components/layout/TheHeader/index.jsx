import { HeaderContainer, HeaderWrapper } from '@/styles/Header.styled.';
import Brand from './Brand';
import Hamburger from './Hamburger';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const TheHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Brand />
        <Navigation />
        <Hamburger />
        <MobileMenu />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default TheHeader;
