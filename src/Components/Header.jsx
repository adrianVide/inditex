import { Link } from "react-router-dom";
import { useLoadingContext } from "../context/LoadingContext";
import { Loader } from "./Loader";

const Header = () => {
  const { isLoading } = useLoadingContext();
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <h1 className="text-cyan-600 font-bold text-3xl">Podcaster</h1>
      </Link>
      {isLoading && <Loader />}
    </div>
  );
};

export default Header;
