import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
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
export const reduxStore = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    [UserReducer.key]: UserReducer.reducer,
  } as ReducersMapObject,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false //인스턴스도.. 리덕스 툴킷에서 활용가능하도록 직렬화 옵션 무시
  }),
});
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
