import axios from "axios";
export const GET_NEWS = 'GET_NEWS';
export const GET_BY_ID = 'GET_BY_ID'


export function getNews() {
    return async function (dispatch) {
      let json = await axios.get(`http://localhost:3001/news`);
      dispatch({
        type: GET_NEWS,
        payload: json.data,
      });
    };
  }

  export function getNewById(id) {
    return async function (dispatch) {
      let json = await axios.get(`http://localhost:3001/news/${id}`);
      dispatch({
        type: GET_BY_ID,
        payload: json.data,
      });
    };
  }