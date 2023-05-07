import { debounce } from "lodash";
import { useState } from "react";

/**
 *
 * @param { any }  initialvalue
 * @param { number }  time
 * @returns {[value: any, handleValue: ()=> void]}
 */

const useDebounce = (initialvalue = null, time = 500) => {
  const [value, setValue] = useState(initialvalue);

  const handeSetValue = debounce((value) => {
    setValue(value);
  }, time);

  return [value, handeSetValue];
};

export default useDebounce;
