import { useLocation, useParams } from "react-router-dom";

const usePagePath = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const route = pathname.slice(0, -1) + (+id + 1);

  return { route, id };
};

export default usePagePath;
