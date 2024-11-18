import { ProfileData } from "@/utils/dataType";
import { createSlice } from "@reduxjs/toolkit";
const ProfileSlice = createSlice({
  name: "profile",
  initialState: <ProfileData>{},
  reducers: {
    setProfile: (state, { payload }) => {
      return payload;
    },
    clearProfile: () => {
      return <ProfileData>{};
    },
  },
});

const { reducer, actions } = ProfileSlice;
export const { setProfile, clearProfile } = actions;
export default reducer;
