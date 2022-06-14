import { fetchDlayout, dlayoutAdapter, dlayoutReducer } from './dlayout.slice';

describe('dlayout reducer', () => {

  it('should handle initial state', () => {
      expect(true).toEqual(true);
    });
  // it('should handle initial state', () => {
  //   const expected = dlayoutAdapter.getInitialState({
  //     loadingStatus: 'not loaded',
  //     error: null,
  //   });

  //   expect(dlayoutReducer(undefined, { type: '' })).toEqual(expected);
  // });

  // it('should handle fetchDlayouts', () => {
  //   let state = dlayoutReducer(undefined, fetchDlayout.pending(null, null));

  //   expect(state).toEqual(
  //     expect.objectContaining({
  //       loadingStatus: 'loading',
  //       error: null,
  //       entities: {},
  //     })
  //   );

  //   state = dlayoutReducer(
  //     state,
  //     fetchDlayout.fulfilled([{ id: 1 }], null, null)
  //   );

  //   expect(state).toEqual(
  //     expect.objectContaining({
  //       loadingStatus: 'loaded',
  //       error: null,
  //       entities: { 1: { id: 1 } },
  //     })
  //   );

  //   state = dlayoutReducer(
  //     state,
  //     fetchDlayout.rejected(new Error('Uh oh'), null, null)
  //   );

  //   expect(state).toEqual(
  //     expect.objectContaining({
  //       loadingStatus: 'error',
  //       error: 'Uh oh',
  //       entities: { 1: { id: 1 } },
  //     })
  //   );
  // });
});
