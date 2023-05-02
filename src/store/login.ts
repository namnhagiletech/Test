import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface LoginState {
  email: string;
  name: string;
}

const initialState: LoginState = {
  email: '',
  name: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

// this is ridiculous
// why need to harden things with with magical function instead of handling it via normal promise or async/await

const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: builder => ({
    login: builder.mutation<LoginState, LoginState>({
      query: body => {
        console.log(body);
        return {
          url: '/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = loginApi;

export const loginApiReducer = loginApi.reducer;
export const loginApiMiddleware = loginApi.middleware;

export const {changeEmail, changeName} = loginSlice.actions;

export default loginSlice.reducer;
