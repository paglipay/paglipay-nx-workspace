import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { fetchDLayout } from './dlayoutAPI';
import * as Yup from 'yup';
/*
 * Update these interfaces according to your requirements.
 */
export interface dlayoutState {
  jsonData: any[];
  sections: any[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: dlayoutState = {
  jsonData: [
    {
      code: 'a',
      componentType: 'AggrigateRating',
      props: {
        title: 'AggrigateRating',
      },
    },
    {
      code: 'd',
      componentType: 'DFormik',
      props: {
        title: 'CardPlaceholderProps',
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required(),
          lastName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required(),
          email: Yup.string().required(),
        }),
        fieldList: [
          {
            name: 'firstName',
            type: 'text',
          },
          {
            name: 'lastName',
            type: 'text',
          },
          {
            name: 'email',
            type: 'text',
          },
        ],
      },
    },
    {
      code: 'd2',
      componentType: 'DFormik',
      props: {
        title: 'CardPlaceholderProps',
        validationSchema: Yup.object({
          code: Yup.string().required(),
          componentType: Yup.string().required(),
          props: Yup.string().required(),
        }),
        fieldList: [
          { name: 'code', type: 'text' },
          { name: 'componentType', type: 'text' },
          { name: 'props', type: 'text' },
        ],
      },
    },
    {
      code: 'k',
      componentType: 'ProductCrousel',
      props: {
        cols: [12],
      },
    },
    {
      code: 'p',
      componentType: 'ProductPurchaseCard',
      props: {
        product: { id: '100', price: 12.99, description: 'thing1' },
        title: 'My Product',
      },
    },
    {
      code: 'o',
      componentType: 'ProductPurchaseCard',
      props: {
        product: { id: '101', price: 11.99, description: 'thing2' },
        title: 'My Product 2',
      },
    },
    {
      code: 'i',
      componentType: 'ProductImages',
      // props: {
      //     title: "one"
      // },
    },
    {
      code: 'c',
      componentType: 'Cart',
      props: {
        product: { id: '101', price: 11.99, description: 'thing2' },
        title: 'My Product 2',
      },
    },
    {
      code: '5',
      componentType: 'ProductReviewCard',
      props: {
        title: 'I Love It! Five Stars',
        rating: 5,
      },
    },
    {
      code: '4',
      componentType: 'ProductReviewCard',
      props: {
        title: '4',
        rating: 4,
      },
    },
    {
      code: '3',
      componentType: 'ProductReviewCard',
      props: {
        title: '3',
        rating: 3,
      },
    },
  ],
  sections: [
    // {
    //   title: 'Section One',
    //   fluid: true,
    //   cols: ['z'],
    //   featureTypesArry: ['k'],
    // },
    // {
    //   title: 'Section Title',
    //   fluid: true,
    //   cols: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
    //   featureTypesArry: [
    //     'i',
    //     'i',
    //     'd2',
    //     'd',
    //     '5',
    //     '5',
    //     '5',
    //     'a',
    //     'p',
    //     'p',
    //     'o',
    //     'c',
    //   ],
    // },
    // {
    //   title: 'Section Two',
    //   fluid: false,
    //   cols: ['4', '4', '4', '4', '4', '4'],
    //   featureTypesArry: ['i', 'i', 'i', 'p', 'o', 'c'],
    // },
  ],
  status: 'idle',
};
export const dlayoutAsync = createAsyncThunk(
  'dlayout/fetchDLayout',
  async (amount: number) => {
    const response = await fetchDLayout(amount);
    console.log('response.data: ', response.data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const dlayoutSlice = createSlice({
  name: 'dlayout',
  initialState: initialState,
  reducers: {
    add: (state) => {
      console.log('add: ', state);
    },
    remove: (state) => {
      console.log('add: ', state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dlayoutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(dlayoutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.jsonData = action.payload.jsonData ;
        state.sections = action.payload.sections;
      })
      .addCase(dlayoutAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
export const { add } = dlayoutSlice.actions;

export const selectDLayout = (state: RootState) => state.dlayout;

export default dlayoutSlice.reducer;
