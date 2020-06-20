// import axios from "axios";
// import ENDPOINT from "../../endpoint";

// export const CREATE_POST_FAIL = "CREATE_POST_FAIL";

// export function loginUser(data) {
//     return (dispatch) => {
//     axios.post(ENDPOINT + "/loginUser", data)
//         .then(response => {
//             console.log("Post Created. ", response);
//             if (response.data.type == "success") {
//                 dispatch({
//                     type: LOGIN_USER_SUCCESS,
//                     payload: response.data.post
//                 })
//                 alert(response.data.message);
//             } else {
//                 if (response.data.type == "error") {
//                     dispatch({
//                         type: CREATE_POST_FAIL
//                     })
//                     alert(response.data.message);
//                 } 
//             }
//         }
 
//     );
//  }
// }