import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      {isAuth ? (
        <div>
          <h2>Welcome {email}</h2>
          <div>
            <button onClick={() => dispatch(removeUser())}>Exit</button>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default HomePage;
