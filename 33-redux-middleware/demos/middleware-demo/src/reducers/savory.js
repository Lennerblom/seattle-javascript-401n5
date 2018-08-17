
import uuid from 'uuid/v1';

const defaultState = { savories : []};

// Action type
export const ADD = 'Savory/ADD';

// Reducer
export default function reducer(state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?
      return {
        ...state,
        savories: [...state.savories, payload]
      };

    default: return state;
  }
}

// Action Creators
export function addSavory(savory) {
  return {
    type: ADD,
    payload: savory,
    meta: {delay: 3000},
  }
}