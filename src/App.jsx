import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Navbar />
      {/*<Login />*/}
    </div>
  );
}

export default App;
