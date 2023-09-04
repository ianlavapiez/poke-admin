import styled from "styled-components";

export const Name = styled.h3`
  font-size: 28px;
  color: green;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 32px;
  }
`;

export const Rank = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: black;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
  }
`;
