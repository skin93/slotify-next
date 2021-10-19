import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 54px;
  background: transparent;
  display: inline-flex;
  line-height: 1.5;

  @media (min-width: 992px) {
    height: 80px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 992px) {
    max-width: 970px;
    height: 80px;
  }

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;
