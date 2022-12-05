import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit'
import { api } from 'src/COSTANTS'
import axios from 'axios'
// import { AddMessage, Message, MessageList } from './types'

interface Article {
  id: string
  title: string
}
export interface ArticleState {
  isLoading: boolean
  error: string
  articles: Article[]
}

const initialState: ArticleState = {
  isLoading: false,
  error: '',
  articles: [],
}

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Article[]>(api)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить статьи')
    }
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled.type]: (
      state,
      action: PayloadAction<Article[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.articles = action.payload
    },
    [fetchArticles.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

// export const { articleFetching, articleFetchingSuccess, articleFetchingError } =
//   articlesSlice.actions

export const articlesReducer = articlesSlice.reducer
