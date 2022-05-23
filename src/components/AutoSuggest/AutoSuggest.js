import React, { useState } from "react";
import { useWordListContext } from "../../providers";

export const AutoSuggest = () => {
  const { words } = useWordListContext;
  const [search, setSearch] = useState("");

  const handleChange = (event) => {};

  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
    </>
  );
};
