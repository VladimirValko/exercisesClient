import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios'

export const fetchWorkout = createAsyncThunk('workout/fetchWorkout', async (params) => {
    const { data } = await axios.get("http://localhost:4444/workouts", params);
    return data;
});

export const addWorkout = createAsyncThunk('workout/addWorkout', async (params) => {
    const { data } = await axios.post(
        "http://localhost:4444/workouts", params
      );
    return data;
});

export const updateWorkout = createAsyncThunk('workout/addWorkout', async (params) => {
    console.log(params)
    const { data } = await axios.patch(
        "http://localhost:4444/workouts",
        params
      );
    return data;
});

const initialState = {
    myWorkout: [],
    completedWorkouts: [],
    status: 'loading',
    postStatus: 'loading'
}

const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setWorkout: (state, action) => {
            state.myWorkout = action.payload;
            console.log('workoutSlice added')
        }
    },
    extraReducers: {
        [fetchWorkout.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchWorkout.fulfilled]: (state, action) => {
            state.myWorkout = action.payload[0].myWorkout;
            state.status = 'loaded';
        }, 
        [fetchWorkout.rejected]: (state) => {
            state.status = 'error';
        },


        [addWorkout.pending]: (state) => {
            state.postStatus = 'loading';
        },
        [addWorkout.fulfilled]: (state) => {
            state.postStatus = 'loaded';
        }, 
        [addWorkout.rejected]: (state) => {
            state.postStatus = 'error';
        },

        [updateWorkout.pending]: (state) => {
            state.postStatus = 'loading';
        },
        [updateWorkout.fulfilled]: (state) => {
            state.postStatus = 'loaded';
        }, 
        [updateWorkout.rejected]: (state) => {
            state.postStatus = 'error';
        },

}});

export const { setWorkout } = workoutSlice.actions;

export const worcoutReducer = workoutSlice.reducer