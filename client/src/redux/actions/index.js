import axios from "axios";
export const GET_NEWS = 'GET_NEWS';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_USERS = 'GET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const POST_USERS = 'POST_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_NEWS_ADMIN = 'GET_NEWS_ADMIN';
export const UPDATE_NEW = 'UPDATE_NEW'


export function getNews() {
    return async function (dispatch) {
      let json = await axios.get(`/news`);
      dispatch({
        type: GET_NEWS,
        payload: json.data,
      });
    };
  }

  export function getNewsAdmin() {
    return async function (dispatch) {
      let json = await axios.get(`/news`);
      dispatch({
        type: GET_NEWS_ADMIN,
        payload: json.data,
      });
    };
  }
  export function updateNew(id, payload) {
    return async function (dispatch) {
      const json = await axios.put(`/news/${id}`, payload);
      return dispatch({
        type: UPDATE_NEW,
        payload: json.data,
      });
    };
  }

  export function getNewById(id) {
    return async function (dispatch) {
      let json = await axios.get(`/news/${id}`);
      dispatch({
        type: GET_BY_ID,
        payload: json.data,
      });
    };
  }

  export function getUsers() {
    return async function (dispatch) {
      let json = await axios.get(`/users`);
      dispatch({
        type: GET_USERS,
        payload: json.data,
      });
    };
  }



  export function updateUser (id, payload){
    return async function (dispatch) {
      const json = await axios.put(`/users/${id}`, payload);
      return dispatch({
        type: UPDATE_USER,
        payload: json.data
      })
    }
  }

  export const createUser = (payload) => async (dispatch) => {
    try {
      const userCreate = await axios.post("/users", payload);
      return dispatch({
        type: POST_USERS,
        payload: userCreate,
      });
    } catch (e) {
      console.log(e);
    }
  };

  export const getUserById = (id) => async (dispatch) => {
    try {
      const user = await axios.get(`/users/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: user.data,
      });
    } catch (e) {
      console.log(e);
    }
  };