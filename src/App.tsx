import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import OutsideClick from "./components/outsideClick";
import Tooltip from "./components/tooltip";

const Home = lazy(() => import("./components/home"));
const Custom = lazy(() => import("./components/custom"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <OutsideClick
          onOutClick={() => {
            console.log("onOutClick");
          }}
        >
          <div className="text-xl p-6 mx-6 font-bold underline bg-green-100 dark:bg-[#f0d71e] sm:bg-green-500">
            inside div
          </div>
        </OutsideClick>
        <button className="btn-primary content11">click</button>
        {/* <Tooltip>
          <span>qq</span>
        </Tooltip> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
