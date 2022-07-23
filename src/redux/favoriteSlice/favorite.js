import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios'

export const fetchFavorite = createAsyncThunk('favorite/fetchFavorite', async (params) => {
    const { data } = await axios.get(
        `http://localhost:4444/favorite`,
        params
      );
      console.log('fetched')
    return data;
});

export const deleteFavorite = createAsyncThunk('favorite/deleteFavorite', async (params) => {
    const { data } = await axios.delete(
        `http://localhost:4444/favorite`,
        params
      );
      console.log('fetched')
    return data;
});


const initialState = {
    favorite: [],
    status: 'loading'
}

const favotiteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setFavorite: (state, action) => {
            state.favorite = action.payload;
            console.log('favorite added from rtk')
        }
    },
    extraReducers: {
        [fetchFavorite.fulfilled]: (state, action) => {
            state.favorite = action.payload;
            state.status = 'loaded';
        }, 
        [fetchFavorite.rejected]: (state) => {
            state.status = 'error';
        },


        [deleteFavorite.pending]: (state) => {
            state.status = 'loading';
        },
        [deleteFavorite.fulfilled]: (state) => {
            state.status = 'loaded';
        }, 
        [deleteFavorite.rejected]: (state) => {
            state.status = 'error';
        },


}

});

export const { setFavorite } = favotiteSlice.actions;

export const favotiteReducer = favotiteSlice.reducer