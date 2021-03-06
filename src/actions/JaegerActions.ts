import { ActionType, createAction, createStandardAction } from 'typesafe-actions';
import { ActionKeys } from './ActionKeys';

// synchronous action creators
export const JaegerActions = {
  setUrl: createAction(ActionKeys.JAEGER_SET_URL, resolve => (url: string) =>
    resolve({
      url: url
    })
  ),
  setEnableIntegration: createStandardAction(ActionKeys.JAEGER_SET_ENABLE_INTEGRATION)<boolean>()
};

export type JaegerAction = ActionType<typeof JaegerActions>;
