import { createSlice } from "@reduxjs/toolkit";
import { letterItems } from "shared/letterItems";
const initialState = { letterAdd: letterItems };

// 리듀서 : 'state에 변화를 일으키는' 함수
// >> state를 action의 type에 따라 변경하는 함수
// action : state를 어떻게 수정할 건지 취하는 동작
// export const ADD_LETTER = "ADD_LETTER";
// export const DELETE_LETTER = "DELETE_LETTER";
// export const UPDATE_LETTER = "UPDATE_LETTER";

// export const addLetter = (payload) => ({
//   type: ADD_LETTER,
//   payload,
// });

// export const deleteLetter = (payload) => ({
//   type: DELETE_LETTER,
//   payload,
// });

// export const updateLetter = (id, content) => ({
//   type: UPDATE_LETTER,
//   payload: { id, content },
// });

// const letterCollect = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LETTER:
//       // ADD_LETTER 액션을 처리하는 로직
//       return {
//         ...state,
//         letterAdd: [...state.letterAdd, action.payload], // 새로운 팬레터 추가
//       };
//     case DELETE_LETTER:
//       return {
//         ...state,
//         letterAdd: state.letterAdd.filter(
//           (letter) => letter.id !== action.payload
//         ),
//       };
//     case UPDATE_LETTER:
//       return {
//         ...state,
//         letterAdd: state.letterAdd.map((letter) =>
//           letter.id === action.payload.id
//             ? { ...letter, content: action.payload.content }
//             : letter
//         ),
//       };
//     default:
//       return state;
//   }
// };

const letterSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      state.letterAdd.push(action.payload);
    },
    deleteLetter: (state, action) => {
      state.letterAdd = state.letterAdd.filter(
        (letter) => letter.id !== action.payload
      );
    },
    updateLetter: (state, action) => {
      const { id, content } = action.payload;
      console.log(id, content);
      return {
        letterAdd: state.letterAdd.map((letter) =>
          letter.id === id ? { ...letter, content: content } : letter
        ),
      };
    },
  },
});

// slice에서 생성된 리듀서를 내보냄
export default letterSlice.reducer;

// slice에서 생성된 액션들을 내보냄
export const { addLetter, deleteLetter, updateLetter } = letterSlice.actions;
