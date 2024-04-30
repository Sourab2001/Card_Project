import { FETCH_POST, REMOVE_POST } from "./API";

const initialState = {
  posts: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, posts: action.payload, loading: false };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
