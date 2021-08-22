import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const pincodeSlice = createSlice({
  name: "postOffice",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.value = payload;
    },
    setDetails: (state, action) => {
      state.value = action.payload[0].PostOffice[0].Block;
    },
  },
});

// Action creators are generated for each case reducer function

export const fetchPostOffice = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading("Loading..."));
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${payload}`
      );

      const data = await response.json();

      if (data[0].Status === "Error") {
        return dispatch(setLoading("Not Found!"));
      }

      return dispatch(setDetails(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { setLoading, setDetails } = pincodeSlice.actions;

export default pincodeSlice.reducer;
