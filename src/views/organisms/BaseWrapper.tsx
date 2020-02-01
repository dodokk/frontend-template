import React from "react";
import styled from "styled-components";

import { headerHeight } from "../../utils/size";
import Header from "../molecules/Header";

const BaseWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - ${headerHeight});
`;

export default BaseWrapper;
