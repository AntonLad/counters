import { combineReducers } from 'redux'  
import count from './count'
import array from './arrayOfCount'
import prevCount from './prevCount'
  
const createRootReducer = () => combineReducers({
    count,
    array, 
    prevCount  
})  
  
export default createRootReducer