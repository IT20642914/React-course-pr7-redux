// import {createStore} from 'redux';
import { createSlice,configureStore } from '@reduxjs/toolkit';
import CounterReducer from './counterSlice';
import authReducer  from './authSlice';

 const store=configureStore({
    reducer:{
        counter:CounterReducer,
        auth:authReducer
    }
});
export default store;
