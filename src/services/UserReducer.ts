import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxUtil as ReduxUtil } from "_commons/utils/ReduxUtil";
import { UserState } from "./UserState";

const _uniqueKey = "userReducer";
const state: UserState = {};
const actions = {
  init(state: UserState, params: any) {
    //TODO: params를 통해 state 적용
  },
};
const asyncActions = {
  login: createAsyncThunk(
    `${_uniqueKey}/login`,
    async (params) => {
      //TODO: params를 통해 API 작업 구현

      return ReduxUtil.applyState<UserState>((state) => {
        //TODO: params를 통해 state 적용
      });
    }
  ),
};

const _slice = createSlice({
  name: _uniqueKey,
  initialState: state,
  reducers: actions,
  extraReducers: ReduxUtil.makeExtraReducers(asyncActions),
});
export default class UserReducer {
  static readonly key: string = _uniqueKey;
  static readonly reducer = _slice.reducer;
  static readonly actions = {
    ..._slice.actions,
    ...asyncActions,
  };
}
