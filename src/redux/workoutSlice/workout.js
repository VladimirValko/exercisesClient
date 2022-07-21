import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../utils/axios'

export const fetchWorkout = createAsyncThunk('workout/fetchWorkout', async (params) => {
    const { data } = await axios.get("http://localhost:4444/workouts", params);
    return data;
});

export const addWorkout = createAsyncThunk('workout/addWorkout', async (params) => {
    console.log(params);
    const { data } = await axios.post(
        "http://localhost:4444/workouts", params
      );
      console.log(data, 'created from RtK')
    return data;
});

export const updateWorkout = createAsyncThunk('workout/addWorkout', async (params) => {
    console.log(params, 'params')
    const { data } = await axios.patch(
        "http://localhost:4444/workouts",
        params
        );
        console.log(data, 'returnet when update')
    return data;
});

const initialState = {
    myWorkouts: [],
    completedWorkouts: [],
    status: 'loading',
    postStatus: 'loading'
}

const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setWorkout: (state, action) => {
            state.myWorkouts.push(action.payload);
            console.log('workoutSlice added')
        }
    },
    extraReducers: {
        [fetchWorkout.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchWorkout.fulfilled]: (state, action) => {
            state.myWorkouts = action.payload;
            state.status = 'loaded';
        }, 
        [fetchWorkout.rejected]: (state) => {
            state.status = 'error';
        },


        [addWorkout.pending]: (state) => {
            state.postStatus = 'loading';
        },
        [addWorkout.fulfilled]: (state, action) => {
            state.postStatus = 'loaded';
            state.myWorkouts.push(action.payload[0].myWorkout);
        }, 
        [addWorkout.rejected]: (state) => {
            state.postStatus = 'error';
        },

        [updateWorkout.pending]: (state) => {
            state.postStatus = 'loading';
        },
        [updateWorkout.fulfilled]: (state, action) => {
            state.postStatus = 'loaded';
            state.myWorkouts = action.payload;
        }, 
        [updateWorkout.rejected]: (state) => {
            state.postStatus = 'error';
        },

}});

export const { setWorkout } = workoutSlice.actions;

export const worcoutReducer = workoutSlice.reducer