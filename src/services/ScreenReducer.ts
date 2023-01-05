import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  applyState, ApplyStateFunction, makeExtraReducers } from "_commons/utils/ReduxUtil";

const _key = "screen";
const initialState = {
  isMenuOn: true,
};

const actions = {
  /**
   * 사용예시
   * dispatch(UserReducer.actions.login(params));
   * 작업이 끝나면, useAppSelector에 의해 
   */

  toggleMenu: createAsyncThunk<ApplyStateFunction<STATE>,void>(
    `${_key}/toggleMenu`,
    async (params) => {
      return applyState<STATE>((state) => {
        state.isMenuOn = !state.isMenuOn;
      });
    }
  ),
};

//------------------------------ 위에는 수정 O, 아래는 수정 X
type STATE = typeof initialState;
const _slice = createSlice({
  name: _key,
  initialState: initialState,
  reducers: {},
  extraReducers: makeExtraReducers(actions),
});
export class ScreenReducer {
  static readonly key: string = _key;
  static readonly reducer = {[_key]: _slice.reducer};
  static readonly actions = actions;
}
