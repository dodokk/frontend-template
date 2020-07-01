import React from "react";
import styled from "styled-components";

const Header: React.FC = props => {
  return <HeaderBox>header</HeaderBox>;
};

const HeaderBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export default Header;
