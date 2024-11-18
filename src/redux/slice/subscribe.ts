import { SubscribeType } from "@/utils/dataType";
import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: <SubscribeType>{},
  reducers: {
    setSubscribe: (state, { payload }) => {
      return payload;
    },
    clearSubscribe: () => {
      return <SubscribeType>{};
    },
  },
});

const { reducer, actions } = subscribeSlice;
export const { setSubscribe, clearSubscribe } = actions;
export default reducer;
