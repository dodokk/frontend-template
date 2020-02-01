import React from "react";
import styled from "styled-components";

import { headerHeight } from "../../utils/size";

const Header: React.FC = props => {
  return <HeaderBox>header</HeaderBox>;
};

const HeaderBox = styled.div`
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
`;

export default Header;
