import { useLocation } from "react-router-dom";

const useBreadcumb = () => {
  const loc = useLocation();

  const _loc = loc.pathname.split("/").filter((item) => {
    if (item.length > 0) return item;
  });

  return _loc;
};

export default useBreadcumb;
