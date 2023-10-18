import { createSlice } from '@reduxjs/toolkit';

const planSlice = createSlice({
  name: 'plan',
  initialState: { selectedPlan: null, monthly: false, onlineService: false,
    storage: false,
    customizable : false },
  reducers: {
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload
    },
    setMonthly: (state, action) => {
      state.monthly = action.payload;
    },
    setOnlineService: (state, action) => {
        state.onlineService = action.payload;
      },
      setStorage: (state, action) => {
        state.storage = action.payload;
      },
      setCustomizable: (state, action) => {
        state.customizable = action.payload;
      },
  },
});

export const { setSelectedPlan, setMonthly } = planSlice.actions;
export default planSlice.reducer;
export const selectPlan = (state) => ({
    selectedPlan: state.plan.selectedPlan || '',
    monthly: state.plan.monthly 
  });
  
export const selectMonthly = (state) => state.plan.monthly;



export const selectOnlineService = (state) => state.plan.onlineService;
export const selectStorage = (state) => state.plan.storage;
export const selectCustomizable = (state) => state.plan.customizable;

export const {
  setOnlineService,
  setStorage,
  setCustomizable,
} = planSlice.actions;

export const setCustomizableAction = (value) => {
  return (dispatch) => {
    dispatch(setCustomizable(value));
  };
};
export const setOnlineServiceAction = (value) => {
    return (dispatch) => {
      dispatch(setOnlineService(value));
    };
  };
  
  export const setStorageAction = (value) => {
    return (dispatch) => {
      dispatch(setStorage(value));
    };
  };
  
