import { UserState } from './../../services/UserState';
import {
  ActionReducerMapBuilder,
  CaseReducers,
} from "@reduxjs/toolkit";

export class ReduxUtil {
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
          (state: any, { payload }: { payload: any }) => payload.apply(state)
        );
      }
    };
  }
  static applyState<STATE>(apply:(state:STATE)=>void){
    return {
      apply
    };
  }
}
