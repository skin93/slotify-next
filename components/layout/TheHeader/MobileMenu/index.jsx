import {
  MenuItem,
  MenuItems,
  MobileBrand,
  MobileMenuOverlay,
  MobileMenuWrapper,
} from '@/styles/MobileMenu.styled';
import { MobileMenuContext } from 'contexts/mobileMenuContext';
import Link from 'next/link';
import { useContext } from 'react';

const MobileMenu = () => {
  const { toggleMenu } = useContext(MobileMenuContext);
  return (
    <MobileMenuOverlay toggleMenu={toggleMenu}>
      <MobileMenuWrapper toggleMenu={toggleMenu}>
        <MenuItems>
          <MenuItem>
            <Link href='/premium'>
              <a>Premium</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/help'>
              <a>Help</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/download'>
              <a>Download</a>
            </Link>
          </MenuItem>
          <MenuItem role='separator'>
            <div />
          </MenuItem>
          <MenuItem>
            <Link href='/signup'>
              <a>Sign Up</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/signin'>
              <a>Sign In</a>
            </Link>
          </MenuItem>
        </MenuItems>
        <MobileBrand />
      </MobileMenuWrapper>
    </MobileMenuOverlay>
  );
};

export default MobileMenu;
