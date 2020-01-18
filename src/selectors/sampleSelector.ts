import { RootState } from "../modules/rootState";

export const sampleSelector = (state: RootState) => {
  return state.sample;
};
