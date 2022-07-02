/* eslint-disable import/no-anonymous-default-export */
const UPDATE_PREVCOUNT = 'UPDATE_PREVCOUNT' 

const initialState = {
  prevCount: {}
}  
  
export default (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_PREVCOUNT: {  
      return {  
        ...state,  
        prevCount: action.payload  
      }  
    }  
    default:  
      return state  
  }  
} 

export function changePrevCounter(prevCount) {  
  return { type: UPDATE_PREVCOUNT, payload: prevCount }  
}  