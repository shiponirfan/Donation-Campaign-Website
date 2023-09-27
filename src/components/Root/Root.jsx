import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  const navigation = useNavigation();
  const location = useLocation();
  return (
    <div>
      <Header location={location}></Header>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center w-full h-full absolute">
          <span className="loading loading-dots w-32 bg-red-500"></span>
        </div>
      ) : (
        <>
          <Outlet></Outlet>
        </>
      )}
    </div>
  );
};

export default Root;
