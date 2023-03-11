import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AboutPage from "screens/pages/AboutPage";
import HomePage from "screens/pages/HomePage";
import ResumePage from "screens/pages/ResumePage";
import {  applyState, ApplyStateFunction, makeExtraReducers } from "_commons/utils/ReduxUtil";

const _key = "page";
const initialState:{
  isMenuOn: boolean,
  screenMap: Record<string, JSX.Element>,
  selectedScreenIndex: number,
} = {
  isMenuOn: false,
  screenMap: {"HOME":<HomePage />,"ABOUT US":<AboutPage />,"RESUME":<ResumePage />,},
  selectedScreenIndex: 0,
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
  selectedScreenIndex: createAsyncThunk<ApplyStateFunction<STATE>,{selectedScreenIndex:number}>(
    `${_key}/selectedScreenIndex`,
    async (params) => {
      return applyState<STATE>((state) => {
        state.selectedScreenIndex = params.selectedScreenIndex;
        state.isMenuOn = false;
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
export class PageReducer {
  static readonly key: string = _key;
  static readonly reducer = {[_key]: _slice.reducer};
  static readonly actions = actions;
}
