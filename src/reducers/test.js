import { COUNTER } from '../actionTypes';

const initialState = {
  counter: 0,
};

export default function testReducer(state = initialState, action = {}) {
  switch (action.type) {
    case COUNTER.ADD:
      const { counter } = state;
      return { counter: counter + action.payload };

    default:
      return state;
  }
}
