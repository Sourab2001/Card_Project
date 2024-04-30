import React from "react";
import { useDispatch } from "react-redux";

const MainPage = () => {
  var nextPage;
  var prevpage;
  var goToPage;
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(nextPage());
  };

  const handlePrev = () => {
    dispatch(prevpage());
  };

  const handlePageClick = page => {
    dispatch(goToPage(page));
  };
  return (
    <div className="MainPage">
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {[1, 2, 3, 4, 5, 6].map((page) => (
        <button key={page} onClick={() => handlePageClick(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};
export default MainPage;
