import {createStore,combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import emailReducer from '../Reducer/emailReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        email:emailReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore