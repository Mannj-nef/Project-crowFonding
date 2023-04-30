import { useEffect } from "react";

const useScrollToTop = (children) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [children]);
};

export default useScrollToTop;
