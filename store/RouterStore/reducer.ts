import { ActionType } from 'constants/type';
import { IStateRouter, IAction } from 'models/common';
export default function routerReducer(state:IStateRouter, action:IAction) {
    switch (action.type) {
      case ActionType.updateRouter:
        return {router:[...action.data]};
      default:
        return state;
    }
  }