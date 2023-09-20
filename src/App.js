// slick.js
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// bootstreapp.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
// custom css styles
import "./assets/css/default-theme-react.css";
import "./assets/css/default-theme.css";
import "./assets/css/responsive.css";
import "./assets/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
