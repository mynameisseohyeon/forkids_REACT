// 상태를 가져올 액션 타입을 정의합니다.
const GET_USER = "GET_USER";

// 액션 생성 함수를 정의합니다.
export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

// 리듀서를 정의합니다.
const initialState = {
  email: "",
  pw: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        email: action.payload.email,
        pw: action.payload.pw,
      };
    default:
      return state;
  }
};

export default userReducer;
