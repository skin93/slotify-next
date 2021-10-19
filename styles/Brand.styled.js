import styled from 'styled-components';

export const BrandWrapper = styled.div`
  display: inline-flex;

  height: 41px;

  @media (min-width: 992px) {
    height: 60px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  & > img {
    height: 27px;

    @media (min-width: 992px) {
      height: 42px;
    }
  }

  & > span {
    font-size: 1rem;

    @media (min-width: 992px) {
      font-size: 1.5rem;
    }
    color: ${(props) => props.theme.colors.text.white};
    font-weight: 700;
  }
`;
