import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading)
        {
            return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#559797] text-center flex justify-center items-center mx-auto mb-10 mt-24"></div>
        }
    if(user)
        {
            return children;
        }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;