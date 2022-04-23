import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const [token, setToken] = useState();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios.post("https://reqres.in/api/login", userData).then((response) => {
      setToken(response.data.token);
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Entre your email"
          variant="outlined"
          type="text"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="password"
          name="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          value="submit"
          variant="contained"
          sx={{ m: 1.5 }}
        >
          Login
        </Button>
      </form>
      Token:{token}
    </div>
  );
};
