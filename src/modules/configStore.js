import letterCollect from "./LetterReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    letterCollect: letterCollect,
  },
});

export default store;
