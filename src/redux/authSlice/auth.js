import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios'

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/auth/register', params); // params = email pass
    return data;
});

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('/auth/login', params); // params = email pass
    return data;
});

const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        }, 
        [fetchAuth.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },



        [fetchRegister.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        }, 
        [fetchRegister.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        }
    }
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
// если при отправке формы логина вернулся ответ от бекенда что такой юзер есть
// selectIsAuth будет тру тк в state.auth.data будет информация о нем

export const { logOut } = authSlice.actions;

export const authReducer = authSlice.reducer