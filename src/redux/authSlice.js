// authSlice.js
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        role: action.payload.role,
        firstName: action.payload.firstName,
        token: action.payload.token, // store the token in the Redux store
      };
    case "LOGOUT":
      return { user: null, role: null, firstName: null, token: null };
    default:
      return state;
  }
};
