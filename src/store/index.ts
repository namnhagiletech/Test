import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginReducer, {loginApiMiddleware, loginApiReducer} from './login';
import {useDispatch} from 'react-redux';

const rootReducer = combineReducers({
  login: loginReducer,
  loginApi: loginApiReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApiMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
