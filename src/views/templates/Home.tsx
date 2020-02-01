import React from "react";
import * as H from "history";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sampleSelector } from "../../redux/selectors/sampleSelector";
import sampleModule from "../../redux/modules/sampleModule";

import SampleButton from "../atoms/SampleButton";
import SampleInput from "../atoms/SampleInput";

const Home: React.FC = props => {
  // dispatch, state を用意
  const dispatch = useDispatch();
  const sampleState = useSelector(sampleSelector);

  const _handleClick = () => {
    dispatch(sampleModule.actions.changeNum(sampleState.someNum + 1));
  };
  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sampleModule.actions.changeStr(e.currentTarget.value));
  };

  return (
    <SampleBox>
      <SampleButton onClick={_handleClick} num={sampleState.someNum} />
      <SampleInput onChange={_handleChange} text={sampleState.someStr} />
    </SampleBox>
  );
};

const SampleBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
