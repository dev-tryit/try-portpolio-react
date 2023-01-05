import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApplyStateFunction, ReduxUtil } from "_commons/utils/ReduxUtil";

const _reducerKey = "screenReducer";

const initialState = {
  version: 3,
};

const actions = {
  /**
   * 사용예시
   * dispatch(UserReducer.actions.login(params));
   * 작업이 끝나면, useAppSelector에 의해 
   */

  login: createAsyncThunk<ApplyStateFunction<STATE>,LoginUIParams>(
    `${_reducerKey}/login`,
    async (params) => {
      //TODO: params를 통해 API 작업 구현

      return ReduxUtil.applyState<STATE>((state) => { 
        //TODO: params를 통해 state 적용
      });
    }
  ),
};

//FunctionParams
type LoginUIParams = {

}

//------------------------------ 위에는 수정 O, 아래는 수정 X
type STATE = typeof initialState;
const _slice = createSlice({
  name: _reducerKey,
  initialState: initialState,
  reducers: {},
  extraReducers: ReduxUtil.makeExtraReducers(actions),
});
export class ScreenReducer {
  static readonly key: string = _reducerKey;
  static readonly reducer = _slice.reducer;
  static readonly actions = actions;
}
