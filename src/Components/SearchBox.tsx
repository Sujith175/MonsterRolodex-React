import React from "react";
import { ChangeEventHandler } from "react";

type searchBoxProps = {
  type: string;
  classname: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  type,
  classname,
  placeholder,
  onChangeHandler,
}: searchBoxProps) => {
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
