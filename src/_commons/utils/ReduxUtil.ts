
import { ScreenReducer } from "services/ScreenReducer";
import {
  ActionReducerMapBuilder,
  CaseReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const reduxStore = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    ...ScreenReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //인스턴스도.. 리덕스 툴킷에서 활용가능하도록 직렬화 옵션 무시
    }),
});
export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

//----------------------- 위에는 자주 사용, 아래는 수정 X

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export function makeExtraReducers(
  asyncActions: any
):
  | CaseReducers<any, any>
  | ((builder: ActionReducerMapBuilder<any>) => void)
  | undefined {
  return (builder) => {
    for (const asyncAction of Object.values(asyncActions)) {
      builder.addCase(
        //@ts-ignore
        asyncAction.fulfilled,
        (state: any, { payload }: { payload: any }) => payload?.apply?.(state)
      );
    }
  };
}
export type ApplyStateFunction<STATE> = {
  apply: (state: STATE) => void;
};
export function applyState<STATE>(
  apply: (state: STATE) => void
): ApplyStateFunction<STATE> {
  return {
    apply,
  };
}
