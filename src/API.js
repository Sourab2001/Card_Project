export const FETCH_POST = "FETCH_POST";
export const REMOVE_POST = "REMOVE_POST";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POST,
        payload: posts,
      })
    );
};

export const removePosts = (id) => ({
  type: REMOVE_POST,
  payload: id
});
