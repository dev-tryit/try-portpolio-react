import { ActionReducerMapBuilder, CaseReducers, configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import UserReducer from "services/UserReducer";

//데이터 보관소
//reduxStore.getStore를 통해서 아래 reducer에서 관리하는 state를 한번에 볼 수 있다.
/*
  {
    key1:key1State,
    key2:key2State,
  }
*/
export class ReduxUtil {
  static readonly reduxStore = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: {
      [UserReducer.key]: UserReducer.reducer,
    } as ReducersMapObject,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false //인스턴스도.. 리덕스 툴킷에서 활용가능하도록 직렬화 옵션 무시
    }),
  });
  static readonly useDispatchWithType: () => AppDispatch = useDispatch;
  static readonly useSelectorWithType: TypedUseSelectorHook<RootState> = useSelector;

  static makeExtraReducers(
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
  static applyState<STATE>(apply:(state:STATE)=>void):ApplyStateFunction<STATE> {
    return {
      apply
    };
  }
}

export type ApplyStateFunction<STATE> = {
  apply: (state:STATE)=>void;
}

export type RootState = ReturnType<typeof ReduxUtil.reduxStore.getState>
export type AppDispatch = typeof ReduxUtil.reduxStore.dispatch
