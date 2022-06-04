import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const DLAYOUT_FEATURE_KEY = 'dlayout';

/*
 * Update these interfaces according to your requirements.
 */
export interface DlayoutEntity {
  id: number;
  jsonData:any[];
  sections:any[];
}

export interface DlayoutState extends EntityState<DlayoutEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const dlayoutAdapter = createEntityAdapter<DlayoutEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchDlayout())
 * }, [dispatch]);
 * ```
 */
export const fetchDlayout = createAsyncThunk(
  'dlayout/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getDlayouts()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialDlayoutState: DlayoutState = dlayoutAdapter.getInitialState(
  {
    jsonData: [
      {
        code: 'a',
        componentType: 'CardPlaceholder',
        props: {
          title: 'CardPlaceholderProps',
        },
      },
      {
        code: 'p',
        componentType: 'ProductPurchaseCard',
        props: {
          title: 'ProductPurchaseCard',
        },
      },
      {
        code: "5",
        componentType: "ProductReviewCard",
        props: {
          title: "I Love It! Five Stars",
          rating: 5,
        },
      },
      
    ],
    sections: [
      {
        title: 'Section Title',
        fluid: true,
        cols: ['4', '4', '4', '4', '4', '4', '4'],
        featureTypesArry: ['a','a','a'],
      },
      {
        title: 'Section Title',
        fluid: false,
        cols: ['4', '4', '4', '4', '4', '4', '4'],
        featureTypesArry: ['a','a','a'],
      }
    ],
    loadingStatus: 'not loaded',
    error: 'null',
  }
);

export const dlayoutSlice = createSlice({
  name: DLAYOUT_FEATURE_KEY,
  initialState: initialDlayoutState,
  reducers: {
    add: dlayoutAdapter.addOne,
    remove: dlayoutAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDlayout.pending, (state: DlayoutState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchDlayout.fulfilled,
        (state: DlayoutState, action: PayloadAction<DlayoutEntity[]>) => {
          dlayoutAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchDlayout.rejected, (state: DlayoutState, action) => {
        state.loadingStatus = 'error';
        state.error = 'action.error.message';
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const dlayoutReducer = dlayoutSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(dlayoutActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const dlayoutActions = dlayoutSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllDlayout);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = dlayoutAdapter.getSelectors();

export const getDlayoutState = (rootState: any): DlayoutState =>
  rootState[DLAYOUT_FEATURE_KEY];

export const selectAllDlayout = createSelector(getDlayoutState, selectAll);

export const selectDlayoutEntities = createSelector(
  getDlayoutState,
  selectEntities
);
