import React from "react";

const SearchBox = ({ type, classname, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={classname}
      />
    </div>
  );
};
export default SearchBox;
