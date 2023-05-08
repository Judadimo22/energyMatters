import { 
    GET_NEWS,
    GET_BY_ID,
    GET_USERS,
    POST_USERS,
    GET_USER_BY_ID,
    GET_NEWS_ADMIN,
    UPDATE_NEW
 } from "../actions";

const initialState ={
    News: [],
    NewsCopy: [],
    NewsAdmin: [],
    NewsAdminCopy: [],
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
        case GET_NEWS_ADMIN:
            return{
                ...state,
                NewsAdmin: action.payload,
                NewsAdminCopy: action.payload
            };
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
        case UPDATE_NEW:
            return{
                ...state
            }
        default: return state
    }
};

export default rootReducer;