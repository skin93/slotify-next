import Link from 'next/link';
import { NavigationWrapper, NavItem, NavItems } from '@/styles/Nav.styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavItems>
        <NavItem>
          <Link href='/premium'>
            <a>Premium</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/help'>
            <a>Help</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/download'>
            <a>Download</a>
          </Link>
        </NavItem>
        <NavItem role='separator'>|</NavItem>
        <NavItem>
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/signin'>
            <a>Sign In</a>
          </Link>
        </NavItem>
      </NavItems>
    </NavigationWrapper>
  );
};

export default Navigation;
