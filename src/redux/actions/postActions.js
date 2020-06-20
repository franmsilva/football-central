import axios from "axios";
const ENDPOINT = "http://localhost:5000"
// making variables to prevent spelling mistake
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAIL = "CREATE_POST_FAIL";
export const GET_ALL_POST_SUCCESS = "GET_ALL_POST_SUCCESS";
export const GET_ALL_POST_FAIL = "GET_ALL_POST_FAIL";
export const DELETE_POST = "DELETE_POST"
// dispatch from redux thunk
// data is object {topic, body}
export function createPost(data, cb) {
  return (dispatch) => {
    axios.post(ENDPOINT + "/createPost", data).then((response) => {
      console.log("Post Created. ", response);
      if (response.data.type === "success") {
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: response.data.post,
        });
        alert(response.data.message);
        cb();
      } else {
        if (response.data.type === "error") {
          dispatch({
            type: CREATE_POST_FAIL,
          });
          alert(response.data.message);
        }
      }
    });
  };
}

export function getAllPosts(data) {
  return (dispatch) => {
    axios
      .get(ENDPOINT + "/getAllPosts")
      .then(function (response) {
        console.log("POSTS RESPONSE: ", response.data);
        if (response.data.type === "success") {
          dispatch({
            type: GET_ALL_POST_SUCCESS,
            payload: response.data.allPosts,
          });
        } else {
          dispatch({
            type: GET_ALL_POST_FAIL,
          });
          alert("Post Failed.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function deletePost(data) {
  return (dispatch) => {
    axios
      .get(ENDPOINT + "/deletePost")
      .then(function (response) {
        console.log("POSTS RESPONSE: ", response.data);
        if (response.data.type === "success") {
          dispatch({
            type: GET_ALL_POST_SUCCESS,
            payload: response.data.allPosts,
          });
        } else {
          dispatch({
            type: GET_ALL_POST_FAIL,
          });
          alert("Post Failed.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}