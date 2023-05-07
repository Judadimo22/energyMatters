import { 
    GET_NEWS,
    GET_BY_ID,
    GET_USERS,
    POST_USERS,
    GET_USER_BY_ID
 } from "../actions";

const initialState ={
    News: [],
    NewsCopy: [],
    Details: [],
    Users: [],
    UsersCopy: [],
    allUsers: [],
    user: {},
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
        case GET_USERS:
            return{
                ...state,
                Users: action.payload,
                UsersCopy: action.payload
            }
        case POST_USERS:
            return {
               ...state,
               allUsers: action.payload,
      };
        case GET_USER_BY_ID:
            return {
               ...state,
               user: action.payload,
        };
        default: return state
    }
};

export default rootReducer;