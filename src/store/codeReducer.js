const initialState = {
  code: false,
};

const UPDATE_CODE = 'UPDATE_CODE';
const CLEAR_CODE = 'CLEAR_CODE';

export const updateCode = (code) => ({
  type: CLEAR_CODE,
  code,
});

export const clearCode = () => ({
  type: CLEAR_CODE,
  code: false,
});

export const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        code: action.code,
      };
    case CLEAR_CODE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};
