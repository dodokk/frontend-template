import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const SampleButton: React.FC<Props> = props => {
  return (
    <>
      <input onChange={props.onChange} />
      <div>{props.text}</div>
    </>
  );
};

export default SampleButton;
