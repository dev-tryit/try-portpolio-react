import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AboutPage from "screens/widgets/portpolio2/AboutPage";
import HomePage from "screens/widgets/portpolio2/HomePage";
import ResumePage from "screens/widgets/portpolio2/ResumePage";
import {  applyState, ApplyStateFunction, makeExtraReducers } from "_commons/utils/ReduxUtil";

const _key = "page";
const initialState = {
  isMenuOn: false,
  screenList: [<HomePage />,<AboutPage />,<ResumePage />,]
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
  selectPage: createAsyncThunk<ApplyStateFunction<STATE>,{selectedPageIndex:number}>(
    `${_key}/selectPage`,
    async (params) => {
      return applyState<STATE>((state) => {
        var returnList = [...state.screenList];
        returnList.splice(params.selectedPageIndex,1);
        returnList = [state.screenList[params.selectedPageIndex], ...returnList];
        
        state.screenList = returnList;
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
