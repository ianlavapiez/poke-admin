import styled from "styled-components";

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: auto;
`;

export const Avatar = styled.img`
  width: auto;
  height: auto;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 200px;
`;

export const Count = styled.h3`
  font-size: 25px;
  color: white;
  line-height: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 32px;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Name = styled.h3`
  font-size: 28px;
  color: white;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  width: 200px;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 32px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

export const PokemonCardContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  border: 1px solid white;
  border-radius: 8px;
  margin: 10px 0;
  gap: 30px;
`;

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: gold;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
  }
`;
