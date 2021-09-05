import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    search_Repositories: (state: RepositoriesState): RepositoriesState => {
      return { loading: true, error: null, data: [] };
    },
    search_Repositories_Success: (
      state: RepositoriesState,
      action: PayloadAction<string[]>
    ): RepositoriesState => {
      return { loading: false, error: null, data: action.payload };
    },
    search_Repositories_Error: (
      state: RepositoriesState,
      action: PayloadAction<string>
    ): RepositoriesState => {
      return { loading: false, error: action.payload, data: [] };
    },
  },
});

// Action creators are generated for each case reducer function
export const { search_Repositories } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
