import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {postService} from '../services/posts.service'

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await postService.getAll();
            console.log(posts)
            return posts;
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const postReducer = postSlice.reducer;
export default postReducer;