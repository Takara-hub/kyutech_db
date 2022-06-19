import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./pages/Top/Top";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
