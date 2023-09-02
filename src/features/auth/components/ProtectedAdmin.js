import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";
import { selectUserInfo } from "../../user/userSlice";
function ProtectedAdmin({ children }) {

    const user = useSelector(selectLoggedInUser);
 const userInfo = useSelector(selectUserInfo);
    if (!user) {
        return <Navigate to="/login"> </Navigate>
    }
    if (user && userInfo.role !== "admin") {
        return <Navigate to="/"> </Navigate>
    }
    return children
}


export default ProtectedAdmin;