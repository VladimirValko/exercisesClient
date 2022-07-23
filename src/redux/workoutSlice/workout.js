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


export const addCompletedWorkout = createAsyncThunk('workout/addCompletedWorkout', async (params) => {
    console.log(params);
    const { data } = await axios.post(
        "http://localhost:4444/progress", params
      );
      console.log(data, 'created COMPLETED from RtK')
    return data;
});

export const fetchCompleted = createAsyncThunk('workout/fetchCompleted', async (params) => {
    console.log(params, 'PARAMPAMPAMS')
    const { data } = await axios.get("http://localhost:4444/progress", params);
    console.log(data)
    return data;
    
});


// упражнение аккумулируется в стэйте
// и потом просто готовое пушится на бэк уже из стэйта
// нужно что бы после отправки стэйт с упражнениями очищался !!!

const initialState = {
    myWorkouts: [],
    completedWorkouts: [], // тут будет фетч с сервера
    completedWorkout: [], // тут будет аккумулироваться массив для отправки на бэк
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
        },
        pushExercise: (state, action) => {
            console.log(state.completedWorkout)
            console.log(action.payload)
            state.completedWorkout.push(action.payload);
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


        [addCompletedWorkout.pending]: (state) => {
            state.postStatus = 'loading';
        },
        [addCompletedWorkout.fulfilled]: (state, action) => {
            state.postStatus = 'loaded';
            state.completedWorkout = [];
        }, 
        [addCompletedWorkout.rejected]: (state) => {
            state.postStatus = 'error';
        },


        [fetchCompleted.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchCompleted.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.completedWorkouts = action.payload;
        }, 
        [fetchCompleted.rejected]: (state) => {
            state.status = 'error';
        },

}});

export const { setWorkout, pushExercise } = workoutSlice.actions;

export const worcoutReducer = workoutSlice.reducer