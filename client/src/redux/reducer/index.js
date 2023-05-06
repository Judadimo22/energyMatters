import { 
    GET_NEWS,
    GET_BY_ID
 } from "../actions";

const initialState ={
    News: [],
    NewsCopy: [],
    Details: []
}

function rootReducer (state= initialState, action) {
    switch(action.type){
        case GET_NEWS:
            return{
                ...state,
                News: action.payload,
                NewsCopy: action.payload
            }
        case GET_BY_ID:
            return{
                ...state,
                Details: action.payload,
      };
        default: return state
    }
};

export default rootReducer;