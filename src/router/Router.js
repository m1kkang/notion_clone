import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
