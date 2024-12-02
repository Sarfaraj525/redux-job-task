import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setUsers, setError } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    dispatch(setUsers(data));
  } catch (error) {
    dispatch(setError('Failed to fetch users'));
  }
};

export default userSlice.reducer;
