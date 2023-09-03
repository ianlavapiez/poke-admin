import { useState } from "react";

const useBoolean = () => {
  const [bool, setBool] = useState<boolean>(false);

  const setBoolToFalse = (): void => setBool(false);
  const setBoolToTrue = (): void => setBool(true);

  return {
    bool,
    setBoolToFalse,
    setBoolToTrue,
  };
};

export default useBoolean;
