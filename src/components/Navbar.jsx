import Button from "@mui/material/Button";
import { useState } from "react";
import { Login } from "./Login";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <nav className="nav">
        <Button
          onClick={() => {
            setShow(!show);
          }}
          sx={{ m: 2 }}
          variant="contained"
        >
          Login
        </Button>
        <Button sx={{ m: 2 }} variant="outlined">
          Logout
        </Button>
      </nav>
      {show ? <Login /> : ""}
    </div>
  );
};
