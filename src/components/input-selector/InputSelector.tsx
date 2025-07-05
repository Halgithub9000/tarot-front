import React from "react";
import CreatableSelect from "react-select/creatable";
import "./InputSelector.css";

function InputSelector(props) {
  return (
    <CreatableSelect
      {...props}
      classNamePrefix="react-select"
      isClearable
      isSearchable
    />
  );
}

export default InputSelector;