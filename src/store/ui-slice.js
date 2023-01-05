const { createSlice } = require('@reduxjs/toolkit');

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notifications: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
