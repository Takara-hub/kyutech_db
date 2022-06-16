import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./pages/Top/Top";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
