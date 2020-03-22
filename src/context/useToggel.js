import { useState } from "react";

const useToggel = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};
export default useToggel;
