import authReducer from '../redux/features/auth/authSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const store = combineReducers({
    user: authReducer,
});
