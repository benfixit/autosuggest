import React, { useState } from "react";

export const AutoSuggest = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    console.log("Event === ", event.target.value);
  };

  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
    </>
  );
};
