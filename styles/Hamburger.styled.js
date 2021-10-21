import styled from 'styled-components';

export const HamburgerWrapper = styled.div`
  display: inline-flex;
  padding: 0 0 1px 9px;
  height: 54px;
  margin-top: -1px;
  z-index: 1;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const HamburgerContainer = styled.button`
  display: inline-block;
  background: transparent;
  border: none;
  height: 54px;
`;

export const HamburgerElement = styled.div`
  display: block;
  width: 22px;
  height: 3px;
  background: #fff;
  margin: 4px 0 0 0;

  border-radius: 1px;
`;
