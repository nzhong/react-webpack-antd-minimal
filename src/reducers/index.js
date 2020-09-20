import { combineReducers } from 'redux'

import UiState from './reducer_uiState'


const rootReducer = combineReducers({
    uiState: UiState,
});

export default rootReducer;