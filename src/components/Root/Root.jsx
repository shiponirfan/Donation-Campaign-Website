import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    const location = useLocation();
    return (
        <div>
            <Header location={location}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;