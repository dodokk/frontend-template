import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sampleSelector } from "../../redux/slices/sampleSlice";
import sampleModule from "../../redux/slices/sampleSlice";

import SampleButton from "../components/Home/SampleButton";
import SampleInput from "../components/Home/SampleInput";

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
