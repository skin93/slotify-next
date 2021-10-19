import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: none;

  @media (min-width: 992px) {
    display: inline-flex;
  }
`;

export const NavItems = styled.ul`
  display: block;
  list-style: none;
`;

export const NavItem = styled.li.attrs((props) => ({
  role: props.role || '',
}))`
  display: inline-block;
  cursor: ${(props) => (props.role === 'separator' ? '' : 'pointer')};

  & > a {
    color: ${(props) => props.theme.colors.text.white};
    font-weight: 700;
    padding: 28px 17px;
  }
`;
