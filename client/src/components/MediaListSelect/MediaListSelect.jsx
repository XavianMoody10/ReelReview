import React from "react";

export const MediaListSelect = ({
  onChange,
  optionsList,
  name,
  defaultValue,
}) => {
  const options = optionsList.map((o) => {
    return (
      <option
        key={o.option}
        value={o.value}
        className=" text-white bg-custom-orange"
      >
        {o.option}
      </option>
    );
  });

  return (
    <select
      name={name}
      id={name}
      onChange={onChange}
      defaultValue={defaultValue}
      className=" text-white border w-full max-w-[200px] py-3 pl-2 outline-none"
    >
      {options}
    </select>
  );
};
