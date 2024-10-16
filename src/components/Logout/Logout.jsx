import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const Logout = () => {
   const dispatch = useDispatch();

   const handleOnClick = () => {
      dispatch(logout());
   }

   return (
      <button onClick={handleOnClick}>Logout</button>
   )
}