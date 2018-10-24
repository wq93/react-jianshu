import {combineReducers} from 'redux-immutable'; // 提供的是immutable数据
import {reducer as headerReducer} from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer,
});

export default reducer;