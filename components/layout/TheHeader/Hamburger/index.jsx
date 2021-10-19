import {
  HamburgerContainer,
  HamburgerElement,
  HamburgerWrapper,
} from '@/styles/Hamburger.styled';
import { useState } from 'react';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <HamburgerWrapper>
      <HamburgerContainer>
        <HamburgerElement />
        <HamburgerElement />
        <HamburgerElement />
      </HamburgerContainer>
    </HamburgerWrapper>
  );
};

export default Hamburger;
