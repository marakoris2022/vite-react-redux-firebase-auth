import { Link } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <Login />
      <p>
        Make an account <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
