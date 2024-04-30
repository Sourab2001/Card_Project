import React, { useEffect } from "react";
import { fetchPosts, removePosts} from "./API";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import MainPage from "./MainPage";
function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removePosts(id));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {posts.map((post) => (
            <Card key={post.id} post={post} onRemove={handleRemove} />
          ))}
          <MainPage />
        </>
      )}
    </div>
  );
}
export default App;


