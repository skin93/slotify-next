import {
  HamburgerContainer,
  HamburgerElement,
  HamburgerWrapper,
} from '@/styles/Hamburger.styled';
import { MobileMenuContext } from 'contexts/mobileMenuContext';
import { useContext } from 'react';

const Hamburger = () => {
  const { toggleMenu, setToggleMenu } = useContext(MobileMenuContext);
  return (
    <HamburgerWrapper>
      <HamburgerContainer onClick={() => setToggleMenu(!toggleMenu)}>
        <HamburgerElement />
        <HamburgerElement />
        <HamburgerElement />
      </HamburgerContainer>
    </HamburgerWrapper>
  );
};

export default Hamburger;
