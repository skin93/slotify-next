import Brand from '@/components/layout/TheHeader/Brand';
import styled from 'styled-components';

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.toggleMenu ? 'rgba(0,0,0,0.5)' : 'inherit'};
  transition: all 0.3s ease-in-out;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 100vw;
  width: 447px;
  padding: 38px;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  right: ${(props) => (props.toggleMenu ? '0' : '-100%')};
  background: ${(props) => props.theme.colors.background.dark};
  transition: all 0.3s ease-in-out;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const MenuItems = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li.attrs((props) => ({
  role: props.role || '',
}))`
  display: block;
  margin: 0;
  cursor: ${(props) => (props.role === 'separator' ? '' : 'pointer')};
  margin: ${(props) => (props.role === 'separator' ? '18px 0 40px' : 0)};
  padding: ${(props) => (props.role === 'separator' ? 0 : '0 0 25px')};

  & > div {
    width: 20px;
    height: 2px;
    background: ${(props) => props.theme.colors.text.white};
  }

  & > a {
    color: ${(props) => props.theme.colors.text.white};
    font-weight: 700;
    line-height: 1;
    font-size: 2.25rem;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  &:nth-child(5) {
    & > a {
      font-size: 1.75rem;
      font-weight: 400;
    }
  }

  &:last-child {
    & > a {
      font-size: 1.75rem;
      font-weight: 400;
    }
  }
`;

export const MobileBrand = styled(Brand)``;
