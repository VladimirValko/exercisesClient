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

// export const addWorkout = createAsyncThunk('workout/addWorkout', async (params) => {
//     const { data } = await axios.post(
//         "http://localhost:4444/workouts", params
//       );
//     return data;
// });

// export const updateWorkout = createAsyncThunk('workout/addWorkout', async (params) => {
//     console.log(params)
//     const { data } = await axios.patch(
//         "http://localhost:4444/workouts",
//         params
//       );
//     return data;
// });

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


        // [addWorkout.pending]: (state) => {
        //     state.postStatus = 'loading';
        // },
        // [addWorkout.fulfilled]: (state) => {
        //     state.postStatus = 'loaded';
        // }, 
        // [addWorkout.rejected]: (state) => {
        //     state.postStatus = 'error';
        // },

        // [updateWorkout.pending]: (state) => {
        //     state.postStatus = 'loading';
        // },
        // [updateWorkout.fulfilled]: (state) => {
        //     state.postStatus = 'loaded';
        // }, 
        // [updateWorkout.rejected]: (state) => {
        //     state.postStatus = 'error';
        // },
}

});

export const { setFavorite } = favotiteSlice.actions;

export const favotiteReducer = favotiteSlice.reducer