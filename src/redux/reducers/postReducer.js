import {
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAIL,
} from "../actions/postActions";

const initState = {
  posts: [],
};

export default function postReducer(state = initState, action) {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      let post = action.payload;
      let posts = state.posts;
      posts.push(post);

      return {
        ...state,
        posts,
      };

    case CREATE_POST_FAIL:
      return state;

    case GET_ALL_POST_SUCCESS:
      // ADDING PAYLOAD TO POSTS

      let allPosts = action.payload;
      return {
        // PUSHING DATA INTO EMPTY POSTS ARRAY
        ...state,
        posts: allPosts,
      };

    case GET_ALL_POST_FAIL:
      return state;

    default:
      return state;
      
  }
}
