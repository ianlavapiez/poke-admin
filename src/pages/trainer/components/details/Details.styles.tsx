import styled from "styled-components";
import Button from "antd/es/button";

export const AddButton = styled(Button)`
  width: 200px;
`;

export const DetailsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h3`
  font-size: 25px;
  line-height: 18px;
  color: white;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.hr`
  margin: 20px 0;
`;
