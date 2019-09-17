import { combineReducers } from 'redux';
import HomepageReducer from '../Homepage/Homepage.reducer';

const rootReducer = combineReducers({
   homepage : HomepageReducer
})

export default rootReducer;