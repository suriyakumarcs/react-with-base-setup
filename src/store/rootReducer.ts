import { combineReducers } from 'redux';

import historyReducer from './history/reducer';
import homeReducer from './home/reducer';

const rootReducer = combineReducers({
  history: historyReducer,
  home: homeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
