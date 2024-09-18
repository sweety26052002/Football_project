import { useState } from "react";
import { setUser } from "../../store/slices/userSlice/userSlice";
import {
  setItemInLocalStorage,
  getItemFromLocalStorage,
} from "../../utils/localSotrage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isUser = true;
  const handleLogin = async () => {
    if (isUser) {
      setItemInLocalStorage("user", JSON.stringify(isUser));
      dispatch(setUser({ email, password }));
      if (getItemFromLocalStorage("user") !== null) {
        navigate("/dashboard");
      }
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
