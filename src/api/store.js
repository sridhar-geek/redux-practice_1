import {configureStore} from '@reduxjs/toolkit'
import postReducer from '../Post/postSlice'
import countReducer from '../Counter/counterSlice'
import userSlice from '../Users/userSlice';

const Store = configureStore({
    reducer:{
        posts: postReducer,
        counter: countReducer,
        users: userSlice, 
    }
})

export default Store;