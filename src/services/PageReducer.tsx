import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AboutPage from "screens/widgets/portpolio2/AboutPage";
import HomePage from "screens/widgets/portpolio2/HomePage";
import ResumePage from "screens/widgets/portpolio2/ResumePage";
import {  applyState, ApplyStateFunction, makeExtraReducers } from "_commons/utils/ReduxUtil";

const _key = "page";
const initialState:{
  isMenuOn: boolean,
  menuList: string[],
  screenMap: Record<string, JSX.Element>,
} = {
  isMenuOn: false,
  menuList: ["HOME","ABOUT US","RESUME"],
  screenMap: {"HOME":<HomePage />,"ABOUT US":<AboutPage />,"RESUME":<ResumePage />,}
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
  selectPage: createAsyncThunk<ApplyStateFunction<STATE>,{pageName:string}>(
    `${_key}/selectPage`,
    async (params) => {
      return applyState<STATE>((state) => {
        var returnMap = {...state.screenMap};
        const { [params.pageName]: screen, ...newReturnMap } = returnMap;
        returnMap = {[params.pageName]:screen, ...newReturnMap};
        state.screenMap = returnMap;

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
