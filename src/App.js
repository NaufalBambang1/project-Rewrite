import React from "react";
import MainLayouts from "./component/layouts/main.layouts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeContent from "./component/content/home.content";
import Wishtlist from "./component/content/wish.content";
import CartContent from "./component/content/cart.conten";
import Library from "./component/content/library.content";
import LoginPage from "./component/login/login.layout";
import SignupPage from "./component/signup/signup.layout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signup" element={<SignupPage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" element={<HomeContent />}></Route>
            <Route path="/wishtlist" element={<Wishtlist />}></Route>
            <Route path="/cart" element={<CartContent />}></Route>
            <Route path="/library" element={<Library />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
